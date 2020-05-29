import React from 'react';
import './Video.css'
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../../person.jpg'

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inCall: this.props.inCall, setInCall: props.setInCall };
    }

    render() {
        return (
            <div className="Video-header">
                <div className="Video-iconDisplay">
                    <img className="Video-icon" src={icon} alt="Video1" />
                    <img className="Video-icon" src={icon} alt="Video2" />
                </div>
                <div className="Video-display">
                    <div className="Video-textDisplay">

                        <p className="Video-inCall">In Call With: </p>
                        <ul>
                            {this.props.inCall}
                        </ul>
                    </div>

                    <Button
                        variant={this.props.inCall === '' ? "secondary" : "danger"}
                        block size="sm"
                        disabled={this.props.inCall === ''}
                        onClick={() => {
                            this.leaveCall()
                        }}
                    >

                        Leave Call
                    </Button>

                </div>
            </div>
        );
    }



    leaveCall() {
        if (this.props.inCall !== '') {
            this.props.setInCall('');
        }
    }
}