import React from 'react';
import './calendarComp.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Element } from 'react-scroll';
import Popup from "reactjs-popup";
import Entry from './Entry';
import RangedDropdown from '../RangedDropdown';



var startAppts = ["Appointment1", "Appointment2", "Appointment3", "Appointment4"];
var startNotes = ["Note1", "Note2", "Note3", "Note4", "DeathNote"];

export default class calendar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            appointments: [],
            notes: [],
            hr: '1',
            min: '00',
        };
       
    }
    state = {
        date: new Date(),
    }


    onChange = date => this.setState({ date })
    //onClickDay = (value, event) => alert('Clicked day: ' + this.state.date)

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

                            {startAppts.map((item) => <Entry key={item.toString()} name={item} />)}
                        

                    </Element>
                    <div className="calendarComp-button">
                        
                                         
                        <Popup 
                            trigger = {<Button variant="primary" size="small">New Appointment</Button>} position="right center"
                            modal
                            onOpen={() => { this.refreshAppointments() }}
                            closeOnDocumentClick
                        >
                            {close => (
                                <div className='popup'>
                                    <form>
                                        <label>
                                            Title of new appointment:
                                            <input type="text" />
                                        </label>
                                        <div >
                                            <label>
                                                Start time:
                                                <div className='calendarComp-time'>
                                                    <RangedDropdown start={1} range={24} dropTitle={this.state.hr}/>
                                                    :<RangedDropdown start={0} range={60} dropTitle={this.state.min}/>
                                                </div>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                End time:
                                                <div className='calendarComp-time'>
                                                    <RangedDropdown start={1} range={24} dropTitle={this.state.hr}/>
                                                    :<RangedDropdown start={0} range={60} dropTitle={this.state.min}/>
                                                </div>
                                            </label>
                                        </div>
                                        <div>
                                            <Button 
                                                onClick ={() =>{
                                                    alert('Your appointment was saved');
                                                    close();
                                                }}>Save</Button>
                                        </div>
                                    </form>
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

                            {startNotes.map((item) => <Entry key={item.toString()} name={item} />)}
                    </Element>
                    
                    <div className="calendarComp-button">
                        <Popup
                            trigger={ <Button variant="primary" size="small">New Note</Button>} position="right-center"
                            modal
                            onOpen={() => { this.refreshNotes() }}
                            closeOnDocumentClick
                        >
                            {close => (
                                <div className='popup'>
                                    <form>
                                        <div className="Note-header">
                                        <label>
                                            Title of new note:
                                            <input type="text" />
                                        </label>
                                        New note:
                                        <label> 
                                            <textarea cols='60' rows='10' className="calendarComp-textarea"/>
                                        </label>
                                        </div>
                                    <div>
                                        <Button
                                            onClick={() => {
                                                alert('Your note was saved');
                                                console.log("modal closed");
                                                close();
                                            }} >Save </Button>
                                    </div>
                                    </form>
                                </div>
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