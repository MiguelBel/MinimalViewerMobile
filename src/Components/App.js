import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';
import ViewersList from './ViewersList'
import Viewer from './Viewer'
import Loading from './Loading'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { viewers: [], isLoading: true }
  }

  componentWillMount() {
    this._fetchViewers()
  }

  renderScene(route, navigator) {
    if(route.identifier == 'ViewersList') {
      return (
        <ViewersList
          navigator={ navigator }
          viewers={ this.state.viewers }
          { ...route.passProps }  />
      )
    } else {
      let viewerTarget = this._findViewerByName(route.identifier, this.state.viewers)

      return (
        <Viewer
          navigator={ navigator }
          target={ viewerTarget }/>
      )
    }
  }

  render() {
    if(this.state.isLoading) {
      return <Loading title="Minimal Viewer"/>
    }

    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ identifier: 'ViewersList' }}
        renderScene={ this.renderScene.bind(this) } />
    )
  }

  _fetchViewers() {
    fetch('https://6zlh88pn7f.execute-api.us-west-2.amazonaws.com/production/viewers')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ viewers: responseData, isLoading: false })
      }).catch((error) => {
        console.error(error);
      }).done();
  }

  _findViewerByName(identifier, viewers) {
    return viewers.find(function(viewer) {
      return viewer.identifier == identifier
    })
  }
}

export default App;
