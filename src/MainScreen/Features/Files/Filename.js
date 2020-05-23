import React from 'react';
import './Filename.css';
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Filename extends React.Component {


    render() {
        return (
            <div className="Filename-header">
                <div className="Filename-text">{this.props.name}</div>
                <div><Button  variant="primary" size="small">Share</Button></div>
            </div>
        );
    }
}