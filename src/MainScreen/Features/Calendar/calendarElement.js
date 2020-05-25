import React from 'react';
import './calendarElement.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

export default class calendarElement extends React.Component {

    render() {
        return (
            <div className="calendarElement-header">
                <div className="calendarElement-text">{this.props.name}</div>
            </div>
        );
    }
    
}