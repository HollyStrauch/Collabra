import React from 'react';
import './contactName.css';
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class contactName extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contactName-header">
                <div className="contactName-text">{this.props.name}</div>
                <div><Button  variant="primary" size="small">Share</Button></div>
            </div>
        );
    }
}