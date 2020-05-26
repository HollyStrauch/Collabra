import React from 'react';
import './audio.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './sliderComp';
import { Dropdown, DropdownButton, MenuItem } from 'react-bootstrap'


export default class audio extends React.Component {

    render() {
        return(
            <div className='audio-header'>

                <div className="settings-header">
                    Microphone Settings
                    <Button className="talkButton" size="small">Talk</Button>

                    <div className="button-dropdown">

                        <Button className="performButton" size="small">Perform</Button>
        
                        <div>
                            <DropdownButton id="dropdown-basic-button" title="Range">
                                <Dropdown.Item href='#/action-1'>Soprano</Dropdown.Item>
                                <Dropdown.Item href='#/action-2'>Alto</Dropdown.Item>
                                <Dropdown.Item href='#/action-3'>Tenor</Dropdown.Item>
                                <Dropdown.Item href='#/action-4'>Bass</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div> 
                       
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