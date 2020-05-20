/*
https://reactnative.dev/docs/flexbox
*/

import React from 'react';
import SideMenu from './SideMenu/SideMenu';
import MainScreen from './MainScreen/MainScreen'
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <div className="App-header">
        <div className="App-SideMenu"><SideMenu /></div>
        
        <div className="App-MainScreen"><MainScreen /></div>
      </div>
    );
  }
}


