import React from 'react';
import './Features.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Files from './Files/Files'
import Tools from './Tools/Tools'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Features extends React.Component {
    render() {
        return (
            <div className="Features-header">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <p>memememe</p>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <p>memememe</p>
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