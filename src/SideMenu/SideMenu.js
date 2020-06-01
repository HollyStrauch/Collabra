/*
Information on Modals:
http://reactcommunity.org/react-modal/
*/

import React from 'react';
import './SideMenu.css';
import './Contacts/contactFeatures.css';
import ReactModal from 'react-modal';
import Button from 'react-bootstrap/button';
import { Accordion, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Contacts/Contacts';


export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal1Open: false, modal2Open: false, setInCall: props.setInCall };
    }

    render() {
        return (
            <div className="SideMenu-header">
               
                    <Button variant="primary" size="lg" block onClick={() => { this.setState(state => ({ modal1Open: true })) }}>
                        Notifications
                    </Button>
                               
                    <Accordion defaultActiveKey="0" bg="dark">
                        <Accordion.Toggle as={Button} variant="success" block size="lg" eventKey="0">
                            Collaborators
                            </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <div className="contactFeatures-header">

                                <Contacts setInCall={this.state.setInCall} inCall={this.props.inCall} />

                            </div>
                        </Accordion.Collapse>
                    </Accordion>
                            
                    <Button variant="primary" size='lg' block onClick={() => { this.setState(state => ({ modal2Open: true })) }}>
                        Account Settings
                    </Button>
                
                <ReactModal isOpen={this.state.modal1Open}
                    onRequestClose={() => { this.setState(state => ({ modal1Open: false })) }}>

                    <Modal.Header closeButton onClick={() => { this.setState(state => ({ modal1Open: false })) }}>
                        <Modal.Title>Notifications</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Here will be all of the notifications you receive</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.setState(state => ({ modal1Open: false })) }}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => { this.setState(state => ({ modal1Open: false })) }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </ReactModal>

                <ReactModal isOpen={this.state.modal2Open}
                    onRequestClose={() => { this.setState(state => ({ modal2Open: false })) }}>
                    <Modal.Header closeButton onClick={() => { this.setState(state => ({ modal2Open: false })) }}>
                        <Modal.Title>Account Settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>We are going to have all kinds of account settings here</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.setState(state => ({ modal2Open: false })) }}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => { this.setState(state => ({ modal2Open: false })) }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </ReactModal>
            </div>
        );
    }
}
