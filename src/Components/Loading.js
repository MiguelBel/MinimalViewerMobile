import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import {
  Spinner
} from 'native-base'
import CustomHeader from './CustomHeader'

class Loading extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title } = this.props

    return (
      <View>
        <CustomHeader
          title={ title } />
        <Spinner color='blue' />
      </View>
    )
  }
}

const { string } = PropTypes;

Loading.propTypes = {
  title: string.isRequired,
}


export default Loading;
