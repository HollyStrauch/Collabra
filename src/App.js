/*
https://reactnative.dev/docs/flexbox
*/

import React from 'react';
import SideMenu from './SideMenu/SideMenu';
import MainScreen from './MainScreen/MainScreen'
import './App.css';

var people = ["Axl Rose", "Slash", "Michael Scott", "Jim Halpert", "Pam Beasley", "Stanley Hudson", "Dwight Schrute", "Phyllis",
"Kevin Malone", "Meredith", "Creed Bratton", "Jan", "David Wallace"];

export default class App extends React.Component {
  componentDidMount () {
    if (!localStorage.getItem('contacts')){
      localStorage.setItem('contacts', JSON.stringify(people));
      console.log(people);
    }
  }

  render() {
    return (
      <div className="App-header">
        <div className="App-SideMenu"><SideMenu /></div>
        
        <div className="App-MainScreen"><MainScreen /></div>
      </div>
    );
  }
}


