import React from 'react';
import './calendarComp.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Element } from 'react-scroll';
import Entry from './Entry';

var appts = ["Appointment1", "Appointment2", "Appointment3", "Appointment4"];
var notes = ["Note1", "Note2", "Note3", "Note4", "DeathNote"];

export default class calendar extends React.Component {

    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {

        return (
            <div className="calendarComp-header">

                <div>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                        className="react-calendar__month-view__weekdays"
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

                            {appts.map((item) => <Entry key={item.toString()} name={item} />)}
                        

                    </Element>
                    <div className="calendarComp-button">
                        <Button variant="primary" size="small">New Appointment</Button>
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

                            {notes.map((item) => <Entry key={item.toString()} name={item} />)}


                    </Element>
                    <div className="calendarComp-button">
                        <Button variant="primary" size="small">New Note</Button>
                    </div>

                </div>


            </div>
        );
    }
}