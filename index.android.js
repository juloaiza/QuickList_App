import React from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './App';

class Quicklist extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Quicklist', () => Quicklist);
