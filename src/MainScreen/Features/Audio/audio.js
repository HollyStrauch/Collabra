import React from 'react';
import './audio.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './sliderComp';
import { Dropdown, ButtonGroup } from 'react-bootstrap'

var ranges = ["Soprano", "Alto", "Tenor", "Bass"];

export default class audio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropTitle: "Perform" };
    }

    render() {
        return (
            <div className='audio-header'>

                <div className="settings-header">
                    <h2 >Microphone Settings</h2>
                    <div className="audio-button">
                        <Button size="small">Talk</Button>
                    </div>

                    <div className="audio-button">

                        <Dropdown as={ButtonGroup}>
                            <Button variant="primary">{this.state.dropTitle}</Button>

                            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                            <Dropdown.Menu>
                                {ranges.map((item) => <Dropdown.Item key={item.toString()} onClick={() => { this.setState(state => ({ dropTitle: item })) }}>{item}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>

                </div>

                <div className="volume-header">
                    <div className='audio-slider'>
                        Input Volume:
                        <Slider>Input</Slider>
                    </div>
                    <div className='audio-slider'>
                        Output Volume:
                        <Slider>Output</Slider>
                    </div>
                </div>

            </div>
        );
    }

}