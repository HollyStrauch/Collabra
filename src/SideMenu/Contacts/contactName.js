import React from 'react';
import './ContactName.css';
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class ContactName extends React.Component {
    render() {
        return (
            <div className="contactName-header">
                <div className="contactName-text">{this.props.name}</div>
                <div className="contactName-buttons">
                <div ><Button  variant="primary" size="sm">Call</Button></div>
                <div ><Button  variant="primary" size="sm">Edit</Button></div>
                </div>
            </div>
        );
    }
}