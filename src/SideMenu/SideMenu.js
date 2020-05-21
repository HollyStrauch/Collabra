/*
Information on Modals:
http://reactcommunity.org/react-modal/
*/

import React from 'react';
import './SideMenu.css';
import ReactModal from 'react-modal';
import  Button from 'react-bootstrap/button';
import {Accordion} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        /* change this to true to make modal appear*/
        this.state = {modal1Open: false};
        this.state = {modal2Open: false};
      }

    render() {
        return (
            <div>
                <div className="SideMenu-header">
                    <div>                    
                    <Button  variant="primary" size="lg" block onClick={()=>{this.setState(state => ({modal1Open: true}))}}>
                            Notifications
                    </Button>                   
                    </div>
                    <div>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="primary" size="lg" block size="lg" eventKey="0">
                                        Friends
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>                                          
                    </div>
                    <div>
                    <Button variant="primary" size='lg' block onClick={()=>{this.setState(state => ({modal2Open: true}))}}>
                            Account Settings
                    </Button>
                    </div>
                            
                </div>
                <ReactModal isOpen={this.state.modal1Open}
                      onRequestClose={()=>{this.setState(state => ({modal1Open: false}))}}>
                    <p> Notifications</p>
                 </ReactModal>
                 <ReactModal isOpen={this.state.modal2Open}
                      onRequestClose={()=>{this.setState(state => ({modal2Open: false}))}}>
                    <p> Account Settings</p>
                 </ReactModal>   
            </div>
        );
    }
}
