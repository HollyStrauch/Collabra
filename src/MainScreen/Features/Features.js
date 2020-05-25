import React from 'react';
import './Features.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Files from './Files/Files'
import Tools from './Tools/Tools'
import Calendar from './Calendar/calendar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Features extends React.Component {
    render() {
        return (
            <div className="Features-header">
                <Tabs defaultActiveKey="audio" id="feature-tabs">
                    <Tab eventKey="audio" title="Audio">
                        <p>memememe</p>
                    </Tab>
                    <Tab eventKey="calendar" title="Calendar">
                        <Calendar />
                    </Tab>
                    <Tab eventKey="files" title="Files">
                        <Files />
                    </Tab>
                    <Tab eventKey="tools" title="Tools">
                        <Tools />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}