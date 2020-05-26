import React from 'react';
import './audio.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './sliderComp';
import { Dropdown, DropdownButton } from 'react-bootstrap'

var ranges = ["Soprano", "Alto", "Tenor", "Bass"];

export default class audio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropTitle: "Range" };
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
                    <div className="audio-perform">
                        <Button size="small">Perform</Button>
                        </div>
                        <DropdownButton bsstyle="default"
                        
                            bssize="small"
                            title={this.state.dropTitle}
                            key={1}
                            id="dropdown-size-small">
                            {ranges.map((item) => <Dropdown.Item key={item.toString()} onClick={() => { this.setState(state => ({ dropTitle: item })) }}>{item}</Dropdown.Item>)}
                        </DropdownButton>

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