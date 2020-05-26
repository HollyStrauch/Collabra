import React from 'react';
import './Tools.css';
import RangedDropdown from '../RangedDropdown'
import Switch from '@material-ui/core/Switch';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import rec from './record.png'

export default class Files extends React.Component {
    constructor(props) {
        super(props);

        this.state = { checkedMet: false, checkdShare: false };
    }

    render() {

        return (

            <div className="Tools-header">
                <div className="Tools-metronome">
                    <div>
                    <h2>Metronome</h2>
                    ON/OFF
                    <Switch color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />
                    </div>
                    <div className = "Tools-metselect">
                        <div className="Tools-dropdown">
                        BPM:
                        <RangedDropdown dropTitle="BPM" start={20} range={230} />
                        </div>
                        <div className="Tools-dropdown">
                        Beats Per Bar:
                        <RangedDropdown dropTitle="Beats Per Bar" start={1} range={32} />
                        </div>
                    </div>
                    Measure Count: 0 <Button variant="outline-primary" size="small">Reset</Button>
                </div>
                
                <div className="Tools-sharing">
                    <div className="Tools-inline">
                    Share Metronome
                        <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                    </div>
                    <div className="Tools-inline">
                        Record Video
                        <input className="Tools-button" type="image" src={rec} alt="rec" />
                    </div>

                </div>
            </div>
        );
    }

}
