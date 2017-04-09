import React, { Component, PropTypes } from 'react';
import {
  View
} from 'react-native'
import {
  Text
} from 'native-base'
import CustomHeader from './CustomHeader'

class NoEntries extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    let { title, navigator } = this.props

    return (
      <View>
        <CustomHeader
          navigator={ navigator }
          title={ title }
          withBackButton={ true } />
        <Text style={{ fontSize: 22, textAlign: 'center', marginTop: 210, padding: 10 }}>
          Woops!{"\n"}There is nothing else for you, yet...
        </Text>
      </View>
    )
  }
}

const { object, string } = PropTypes;

NoEntries.propTypes = {
  navigator: object.isRequired,
  title: string.isRequired
}

export default NoEntries;
