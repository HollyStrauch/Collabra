import React from 'react';
import './MainScreen.css' 
import Video from './Video/Video'
import Tabs from './Features/Features'

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inCall: this.props.inCall, setInCall: props.setInCall };
    }


    render() {
        return (
            <div className="MainScreen-header">
                Collabra!
                <div className="MainScreen-VideoSize"><Video inCall={this.props.inCall} setInCall={this.props.setInCall}/></div>
                <div className="MainScreen-TabsSize"><Tabs /></div>
            </div>
        );
    }
}