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
import RangedDropdown from '../RangedDropdown';



var appts = ["Appointment1", "Appointment2", "Appointment3", "Appointment4"];
var notes = ["Note1", "Note2", "Note3", "Note4", "DeathNote"];

export default class calendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            appointments: [],
            notes: [],
        };
       
    }
    state = {
        date: new Date(),
    }


    handleSave(){
        alert('An appointment was saved for' + this.state.date);
         
        
    }

    onChange = date => this.setState({ date })
    onClickDay = (value, event) => alert('Clicked day: ' + this.state.date)

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
                            {close => (
                                <form onSave={this.handleSave}>
                                    <label>
                                        Title of new appointment:
                                        <input type="text" />
                                    </label>
                                    <label>
                                        Appointment start time:
                                        <div>Hour: <RangedDropdown start={1} range={24}/></div>
                                        <div>Minute: <RangedDropdown start={0} range={60}/></div>
                                    </label>
                                    <label>
                                        Appointment end time:
                                        <div>Hour: <RangedDropdown start={1} range={24}/></div>
                                        <div>Minute: <RangedDropdown start={0} range={60}/></div>
                                    </label>
                                    <div>
                                        <Button 
                                        type="save" 
                                        value="Save"
                                        onClick ={() =>{
                                            console.log("modal closed");
                                            close();
                                        }}>Save</Button>
                                    </div>
                                </form>
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

                            {notes.map((item) => <Entry key={item.toString()} name={item} />)}


                    </Element>
                    <div className="calendarComp-button">
                        <Popup
                            trigger={ <Button variant="primary" size="small">New Note</Button>} position="right-center"
                            modal
                            onOpen={() => { this.refreshNotes() }}
                            closeOnDocumentClick
                        >
                            {close => (
                                <form>
                                    <label>
                                        Title of new note:
                                        <input type="text" />
                                    </label>
                                    <label>
                                        New note:
                                        <textarea cols='70' rows='10'/>
                                    </label>
                                <div>
                                    <Button
                                        onClick={() => {
                                            console.log("modal closed");
                                            close();
                                        }} >Save </Button>
                                </div>
                                </form>
                            )}
                        </Popup>
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