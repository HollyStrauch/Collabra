import React from 'react';
import './audio.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './sliderComp';
import dropDown from './dropDown';
import RangedDropdown from '../Tools/RangedDropdown';


export default class audio extends React.Component {

    render() {
        return(
            <div className='audio-header'>

                <div className="settings-header">
                    Microphone Settings
                    <Button className="talkButton" size="small">Talk</Button>
                    <Button className="performButton" size="small">Perform</Button>
                    <RangedDropdown />
                </div>

                <div className="volume-header">
                    <div className='input-volume'>
                        Input Volume:
                        <Slider>Input</Slider>
                    </div>
                    <div className='output-volume'>
                        Output Volume:
                        <Slider>Output</Slider>
                    </div>
                </div>

            </div>
        );
    }

}