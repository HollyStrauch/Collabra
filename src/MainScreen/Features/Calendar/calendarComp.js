import React from 'react';
import './calendarComp.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Element } from 'react-scroll';
import TextField from '@material-ui/core/TextField';
import Popup from "reactjs-popup";
import Entry from './Entry';

var startAppts = ["Appointment1", "Appointment2", "Appointment3", "Appointment4"];
var startNotes = ["Note1", "Note2", "Note3", "Note4", "DeathNote"];

export default class calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { appts: [], notes: [] };
    }
    
    componentDidMount () {
        this.setState(state => ({appts: startAppts}));
        this.setState(state => ({notes: startNotes}));
    }

    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })
    onClickDay = (value, event) => alert('Clicked day: ', value)

    render() {

        return (
            <div className="calendarComp-header">

                <div>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                        className="react-calendar__month-view__weekdays"
                        calendarType="US"
                        onClickDay={this.onClickDay}
                    />
                </div>

                <div>
                    Appointments:
                    <Element className="element" id="containerElement" style={{
                        height: '150px',
                        width: '400px',
                        overflow: 'scroll',
                        backgroundColor: ' #FFFDF5',
                    }}>

                            {this.state.appts.map((item) => <Entry key={item.toString()} name={item} />)}
                        

                    </Element>
                    <div className="calendarComp-button">
                        
                        <Popup
                    trigger={<Button variant="primary" size="small">New Appointment</Button>}
                    modal
                    closeOnDocumentClick
                >
                    {close => (
                        <div className="calendarComp-header-popup">
                            <div className="content">
                                <div>
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                    Enter new Appointment:
                                    <input type="textarea" rows="6" cols="50" />
                                    </label>

                                    <Button
                                        variant="primary"
                                        size="lg"
                                        block
                                        onClick={() => {
                                            this.handleSubmit(this.state.appts);
                                            close();
                                        }} 
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        block 
                                        onClick={() => {
                                            close();  
                                        }}             
                                    >
                                    Cancel
                                    </Button>

                                    </form>
                                </div>
                            </div>
 
                        </div>
                    )}
                </Popup>                           

                    </div>
                </div>

                <div>
                    Notes:
                        <Element className="element" id="containerElement" style={{
                        height: '150px',
                        width: '400px',
                        overflow: 'scroll',
                        backgroundColor:  '#FFFDF5',
                    }}>

                            {this.state.notes.map((item) => <Entry key={item.toString()} name={item} />)}


                    </Element>
                    <div className="calendarComp-button">
                        <Button variant="primary" size="small">New Note</Button>
                    </div>

                </div>


            </div>
        );
    }

    handleSubmit(stateVar, newVal) {
        this.setState({
            stateVar: this.state.arr.concat(newVal)
          })
    }
}