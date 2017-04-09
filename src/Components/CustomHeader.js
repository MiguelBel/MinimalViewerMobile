import React, { Component, PropTypes } from 'react';
import {
  View
} from 'react-native'
import {
  Header,
  Body,
  Title,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base'

class CustomHeader extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    let { title, navigator, withBackButton } = this.props

    return (
      <Header>
        {
          withBackButton == true && (
            <Left>
              <Button transparent onPress={ () => navigator.pop() }>
                <Icon name='arrow-back' />
              </Button>
            </Left>
          )
        }
        <Body>
          <Title>{ title }</Title>
        </Body>
        {
          withBackButton == true && (
            <Right></Right>
          )
        }
      </Header>
    )
  }
}

const { object, string, bool } = PropTypes;

CustomHeader.propTypes = {
  title: string.isRequired,
  navigator: object,
  withBackButton: bool
}

export default CustomHeader;
