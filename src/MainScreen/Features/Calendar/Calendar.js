import React from 'react';
import './calendar.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




export default class calendar extends React.Component{
    
    state = {
        date: new Date(2020, 2, 1),
    }

    onChange = date=> this.setState({ date })
   
    render() {
        
        return(
            <div className="Calendar-header">
                <div className="date-Selector"/** Buttons representing days in the month. Click on one and it will show app/notes for that day */>
                    <Calendar 
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
                
                <div className="Appointments-header" /** needs text box relating to the selected date */>
                    Appointments:
                    <div className="Appointments-button">
                        <Button variant="primary" size="small">New Appointment</Button>
                    </div>  
                </div>
                <div className="Note-header" /** needs text box relating to the selected date*/>
                    Notes:
                    <div className="Note-button">
                        <Button variant="primary" size="small">New Note</Button>
                    </div>
                </div>
            </div>
        );
    }
}