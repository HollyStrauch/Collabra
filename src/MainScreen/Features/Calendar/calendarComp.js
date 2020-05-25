import React from 'react';
import './calendarComp.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calendarElement from './calendarElement.js';
import {Element} from 'react-scroll';

var appts = ["Appointment1","Appointment2","Appointment3","Appointment4"];
var notes = ["Note1", "Note2", "Note3", "Note4", "DeathNote"];

export default class calendar extends React.Component{
    
    state = {
        date: new Date(2020, 2, 1),
    }

    onChange = date=> this.setState({ date })
   
    render() {
        
        return(
            <div className="Calendar-header">
                <div className="date-Selector">
                    <Calendar 
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
                
                <div className="Appointments-header">
                    Appointments:
                    <Element className="element" id="containerElement" style={{
                        position: 'bottom',
                        height: '100px',
                        overflow: 'scroll',
                    }}>
                        <ul>
                            {appts.map((item) => <calendarElement key={item.toString()} name={item}/>)}
                        </ul>

                    </Element>

                    <div className="Appointments-button">
                        <Button variant="primary" size="small">New Appointment</Button>
                    </div> 

                </div>
                <div className="Note-header" /** needs text box relating to the selected date*/>
                    Notes:
                    <Element className="element" id="containerElement" style={{
                        position:'bottom',
                        height: '100px',
                        overflow: 'scroll',
                    }}>
                        <ul>
                            {notes.map((item) => <calendarElement key={item.toString()} name={item}/>)}
                        </ul>

                    </Element>

                    <div className="Note-button">
                        <Button variant="primary" size="small">New Note</Button>
                    </div>
                </div>
            </div>
        );
    }
}