import React from 'react';
import './Filename.css';
import Button from 'react-bootstrap/button';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from "reactjs-popup";

export default class Filename extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropTitle: "Collaborators", contacts: [] };
    }

    render() {
        return (
            <div className="Filename-header">
                <div className="Filename-text">{this.props.name}</div>
                <Popup
                    trigger={<Button variant="primary" size="small">Share</Button>}
                    modal
                    onOpen={() => { this.refreshContacts() }}
                    onClose={() => {this.resetDroptitle()}}
                    closeOnDocumentClick
                >
                    {close => (
                        <div className="popup">
                            Share {this.props.name} with:
                            <div className="content">
                                <DropdownButton bsstyle="default"
                                    bssize="small"
                                    title={this.state.dropTitle}
                                    key={1}
                                    id="dropdown-size-small">
                                    {this.state.contacts.map((item) => 
                                        <Dropdown.Item 
                                            key={item.toString()} 
                                            onClick={() => { 
                                                this.setState(state => ({ 
                                                    dropTitle: item 
                                                })) 
                                            }}
                                        >
                                            {item}
                                        </Dropdown.Item>)}
                                </DropdownButton>
                                <div>
                                    <Button
                                        variant="outline-primary"
                                        size="small"
                                        onClick={() => {
                                            console.log("modal closed ");
                                            close();
                                        }} >Share</Button></div>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        );
    }

    refreshContacts() {
        let people = JSON.parse(localStorage.getItem('contacts'));
        this.setState(state => ({ contacts: people }))
    }

    resetDroptitle() {
        this.setState(state => ({ dropTitle: "Collaborators"}));
    }
}