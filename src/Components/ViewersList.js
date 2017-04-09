import React, { Component, PropTypes } from 'react';
import {
  View
} from 'react-native';
import {
  Content,
  List,
  ListItem,
  Text
} from 'native-base'
import CustomHeader from './CustomHeader'

class ViewersList extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View>
        <CustomHeader
          navigator={ navigator }
          title={ 'Minimal Viewer' }
          withBackButton={ false } />
        <List>
          { this._renderViewers() }
        </List>
      </View>
    );
  }

  _renderViewers() {
    const { viewers } = this.props

    return viewers.map(function(viewer, index){
      name = viewer.name
      identifier = viewer.identifier
      routerTrigger = this._navigate.bind(this, identifier)

      return (
        <ListItem onPress={ routerTrigger } key={ identifier }>
          <Text>{ name }</Text>
        </ListItem>
      );
    }.bind(this))
  }

  _navigate(identifier) {
    this.props.navigator.push({
      identifier: identifier
    })
  }
}

const { object, array } = PropTypes;

ViewersList.propTypes = {
  navigator: object.isRequired,
  viewers: array.isRequired
}

export default ViewersList;
