import React, { Component, PropTypes } from 'react';
import {
  View,
  AsyncStorage
} from 'react-native';
import {
  Text,
  TouchableHighlight,
  DeckSwiper,
  Card,
  CardItem
} from 'native-base'
import Loading from './Loading'
import NoEntries from './NoEntries'
import CustomHeader from './CustomHeader'
import HeadlineEntry from './HeadlineEntry'
import StoryEntry from './StoryEntry'
import AsyncArray from '../Utils/AsyncArray'

class Viewer extends Component {
  constructor(props) {
    super(props)

    this.state = { isLoading: true, entries: [], currentEntry: undefined }
  }

  componentWillMount() {
    this._fetchEntries()
  }

  render() {
    const { target: { name, url, type, relations, secondary_color }, navigator } = this.props
    const { entries, currentEntry, isLoading } = this.state
    let noEntriesLeft = (entries.length == 0)

    if(isLoading) {
      return <Loading title={ name } />
    }

    if(noEntriesLeft) {
      return (
        <NoEntries
          title={ name }
          navigator={ navigator }/>
      )
    }

    let totalEntries = entries.length
    let currentEntryPosition = entries.indexOf(currentEntry) + 1

    this._markAsViewed(currentEntry)

    return (
      <View>
        <CustomHeader
          navigator={ navigator }
          title={ name }
          withBackButton={ true } />
        <DeckSwiper
        dataSource={ entries }
        renderItem={ item =>
          type == "headline" ?
            (
              <HeadlineEntry
                entry={ item }
                relations={ relations }
                total={ totalEntries }
                currentPosition={ currentEntryPosition }
                secondaryColor={secondary_color} />
            )
          :
            (
              <StoryEntry
                entry={ item }
                relations={ relations }
                total={ totalEntries }
                currentPosition={ currentEntryPosition }
                secondaryColor={ secondary_color } />
            )
        }
        onSwipeRight={ this._nextStory.bind(this) }
        onSwipeLeft={ this._nextStory.bind(this) } />
      </View>
    )
  }

  _fetchEntries() {
    const { target: { url, relations: { Root } } } = this.props

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        let entries = responseData[Root] || responseData

        AsyncStorage.getAllKeys().then((keys) => {
          let filteredEntries = entries.filter((entry) => {
            let key = this._generateReferenceFor(entry)

            if (keys.indexOf(key) == -1) {
              return true
            }
          })

          let currentEntry = filteredEntries[0]
          this.setState({ entries: filteredEntries, isLoading: false, currentEntry: currentEntry })
        })
      }).catch((error) => {
        console.error(error);
      }).done();
  }

  _nextStory() {
    const { entries, currentEntry } = this.state
    let currentEntryIndex = entries.indexOf(currentEntry)
    let nextEntryIndex = currentEntryIndex + 1
    let nextEntry = entries[nextEntryIndex]

    if(nextEntry) {
      this.setState({
        currentEntry: nextEntry
      })
    } else {
      this.setState({
        entries: [],
        currentEntry: undefined
      })
    }
  }

  _markAsViewed(entry) {
    let reference = this._generateReferenceFor(entry)

    AsyncStorage.setItem(reference, 'viewed');
  }

  _generateReferenceFor(entry) {
    const { target: { identifier, relations } } = this.props

    return '@MinimalViewer:' + identifier + ':' + entry[relations.ElementKey]
  }
}

const { object } = PropTypes;

Viewer.propTypes = {
  navigator: object.isRequired,
  target: object.isRequired
}

export default Viewer;
