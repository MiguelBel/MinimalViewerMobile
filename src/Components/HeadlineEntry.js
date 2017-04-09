import React, { Component, PropTypes } from 'react';
import {
  View,
  Linking,
  TouchableHighlight
} from 'react-native';
import {
  Text,
} from 'native-base'

class HeadlineEntry extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { entry, total, currentPosition, relations, secondaryColor } = this.props

    let title = entry[relations.Title]
    let link = entry[relations.Link]
    let subtitle = entry[relations.Subtitle]

    return (
      <TouchableHighlight onPress={ () => Linking.openURL(link) }>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
          <View style={{ justifyContent: 'center', height: 300, padding: 40 }}>
            <Text style={{ textAlign: 'center', fontSize: 32 }}>{ title }</Text>
          </View>
          <View style={{ justifyContent: 'center', height: 100 }}>
            <Text style={{ textAlign: 'center', fontSize: 24 }}>{ subtitle }</Text>
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

HeadlineEntry.propTypes = {
  entry: object.isRequired,
  total: number.isRequired,
  currentPosition: number.isRequired,
  relations: object.isRequired,
  secondaryColor: string.isRequired
}

export default HeadlineEntry;
