import React from 'react';
import './Entry.css';
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Entry extends React.Component {


    render() {
        return (
            <div className="Entry-header">
                <div className="Entry-text">{this.props.name}</div>
                <div><Button  variant="outline-primary" size="small">Edit</Button></div>
            </div>
        );
    }
}