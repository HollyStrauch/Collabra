import React from 'react';
import './calendarComp.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Element } from 'react-scroll';
import Entry from './Entry';
import Popup from "reactjs-popup";
import { Dropdown, DropdownButton } from 'react-bootstrap';



var appts = ["Appointment1", "Appointment2", "Appointment3", "Appointment4"];
var notes = ["Note1", "Note2", "Note3", "Note4", "DeathNote"];

export default class calendar extends React.Component {
    constructor(props){
        super(props);
       
    }
    state = {
        date: new Date(),
    }


    handleSave(){
        alert('An appointment was saved for' + this.state.date);
        
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

                            {appts.map((item) => <Entry key={item.toString()} name={item} />)}
                        

                    </Element>
                    <div className="calendarComp-button">
                        <Popup 
                            trigger = {<Button variant="primary" size="small">New Appointment</Button>} position="right center"
                            modal
                            onOpen={() => { this.refreshAppointments() }}
                            closeOnDocumentClick
                        >
                            <form onSave={this.handleSave}>
                                <label>
                                    Title of new appointment:
                                    <input type="text" />
                                </label>
                                <label>
                                    Appointment start time:
                                    <DropdownButton title="Hour">
                                        <ul>

                                        </ul>
                                    </DropdownButton>
                                    <DropdownButton title="Minute"/>
                                </label>
                                <label>
                                    Appointment end time:
                                    <DropdownButton title="Hour"/>
                                    <DropdownButton title="Minute"/>
                                </label>
                                <Button type="save" value="Save">Save</Button>
                            </form>

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

                            {notes.map((item) => <Entry key={item.toString()} name={item} />)}


                    </Element>
                    <div className="calendarComp-button">
                        <Button variant="primary" size="small">New Note</Button>
                    </div>

                </div>


            </div>
        );
    }

    refreshAppointments(){

    }
    refreshNotes(){

    }
}