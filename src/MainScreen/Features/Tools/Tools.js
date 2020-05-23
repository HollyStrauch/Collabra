import React from 'react';
import './Tools.css';
import RangedDropdown from './RangedDropdown'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
                    <h2>Metronome</h2>
                    <div className = "Tools-metselect">
                        BPM:
                        <RangedDropdown dropTitle="BPM" start={20} range={230} />
                        Beats Per Bar:
                        <RangedDropdown dropTitle="Beats Per Bar" start={1} range={32} />
                    </div>
            
                    <Switch color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />
                    <Button variant="primary" size="small">Reset</Button>
                </div>
                <div className="Tools-sharing">
                    <div className="Tools-inline">
                    Share Metronome
                        <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                    </div>
                    <div className="Tools-inline">
                        Record
                        <button style={{ width: '15%' }}><img className="Tools-button" src={rec} alt="record" /></button>
                    </div>

                </div>
            </div>
        );
    }

}
