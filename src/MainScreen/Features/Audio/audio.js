import React from 'react';
import './audio.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class audio extends React.Component {

    render() {
        return(
            <div className='audio-header'>

                <div className="settings-header">
                    Microphone Settings
                    <Button className="talkButton" size="small">Talk</Button>
                    <Button className="performButton" size="small">Perform</Button>
                </div>

                <div className="volume-header">
                    <div className='input-volume'>
                        Input Volume:
                    </div>
                    <div className='output-volume'>
                        Output Volume:
                    </div>
                </div>

            </div>
        );
    }

}