import React from 'react';
import './Filename.css';


export default class Filename extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Filename-header">
                <div className="Filename-text">{this.props.name}</div>
                <div><button className="Filename-button">Share</button></div>
            </div>
        );
    }
}