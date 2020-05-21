import React from 'react';
import './Features.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import icon from '../../metronome.png'

export default class Features extends React.Component {
    render() {
        return (
            <div className="Features-header">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                    <img src={icon} />
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                    <p>dfadad</p>
                    <p>dfadad</p>
                    <p>dfadad</p>
                    <p>dfadad</p>
                    <p>dfadad</p>
                    <p>dfadad</p>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <p>dgdgg</p>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}