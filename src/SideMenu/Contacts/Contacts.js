import React from 'react';
import './Contacts.css';
import ContactName from './ContactName';
import { Element } from 'react-scroll'
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactModal from 'react-modal';
import { Modal } from 'react-bootstrap';
import ContactFill from './ContactFill';



export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { people: [], setInCall: props.setInCall };
    }

    componentDidMount() {
        var tempArray = JSON.parse(localStorage.getItem('contacts'));
        console.log(tempArray);
        this.setState(state => ({ people: tempArray }));
    }

    render() {
        return (

            <div >
                <Element className="element" id="containerElement" style={{
                    position: 'relative',
                    height: '598px',
                    overflow: 'scroll',
                }}>

                    {this.state.people.map((person) =>
                        <ContactName key={person.toString()}
                            name={person}
                            setInCall={this.state.setInCall}
                            inCall={this.props.inCall}
                        />
                    )}

                </Element>
                <div>
                    <Button
                        variant="outline-info"
                        block size="lg"
                        onClick={() => {
                            this.setState(state => ({ modal3Open: true }))
                        }
                        }
                    >
                        Add Contact
                        </Button>
                </div>
                <ReactModal size="small" isOpen={this.state.modal3Open} onRequestClose={() => { this.setState(state => ({ modal3Open: false })) }}>
                    <Modal.Header closeButton onClick={() => { this.setState(state => ({ modal3Open: false })) }}>
                        <Modal.Title>Add Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Who would you like to add?
                       <ContactFill />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { this.setState(state => ({ modal3Open: false })) }}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => { this.setState(state => ({ modal3Open: false })) }}>
                            Save Contact
                        </Button>
                    </Modal.Footer>
                </ReactModal>
            </div>
        );
    }
}