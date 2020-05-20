import React from 'react';
import './MainScreen.css' 
import Video from './Video/Video'
import Tabs from './Features/Features'

export default class MainScreen extends React.Component {
    render() {
        return (
            <div className="MainScreen-header">
                Hello I am MainScreen box
                <div className="MainScreen-VideoSize"><Video /></div>
                <div className="MainScreen-TabsSize"><Tabs /></div>
            </div>
        );
    }
}