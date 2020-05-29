import React from 'react';
import './Video.css' 
import icon from '../../person.jpg'

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inCall: this.props.inCall };
    }

    render() {
        return (
            <div className="Video-header">
                <div className="Video-iconDisplay">
                    <img className="Video-icon" src={icon} alt="Video1" />
                    <img className="Video-icon" src={icon} alt="Video2" />
                </div>
                <div className="Video-display">
                    <p className="Video-inCall">In Call With: </p>
                    <ul>
                    {this.props.inCall}
                    </ul>
                </div>
            </div>
        );
    }
}