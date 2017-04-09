import React, { Component, PropTypes } from 'react';
import {
  View,
  Linking,
  TouchableHighlight
} from 'react-native';
import {
  Text,
} from 'native-base'

class StoryEntry extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { entry, total, currentPosition, relations, secondaryColor } = this.props

    let title = entry[relations.Title]
    let subtitle = entry[relations.Subtitle]
    let link = entry[relations.Link]

    return (
      <TouchableHighlight onPress={ () => Linking.openURL(link) }>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, paddingTop: 50  }}>
          <View style={{ height: 350 }}>
            <Text style={{ fontSize: 24 }}>{ title }</Text>
            <View style={{ width: 200, height: 2, backgroundColor: 'black', marginTop: 25, marginBottom: 25 }}></View>
            <Text style={{ fontSize: 14 }}>{ subtitle }</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', height: 220 }}>
            <View style={{ width: 250, height: 2, backgroundColor: 'black', marginBottom: 30,  }}></View>
            <Text style={{ fontSize: 32  }}>
              <Text style={{ color: secondaryColor, fontSize: 32  }}>{ currentPosition }</Text>/{ total }
              </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const { object, number, string } = PropTypes;

StoryEntry.propTypes = {
  entry: object.isRequired,
  total: number.isRequired,
  currentPosition: number.isRequired,
  relations: object.isRequired,
  secondaryColor: string.isRequired
}

export default StoryEntry;
