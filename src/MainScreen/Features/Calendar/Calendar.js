import React from 'react';
import './Calendar.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import CalendarTable from './Calendar-Table.js';


export default class Calendar extends React.Component{
    constructor(props) {
        super(props);
        
    }
    apptClick(i) {/**the appointment button clicked */

    }
    noteClicke(i) {/** the notes button clicked */

    }
    /**click on a day of the calendar function needed */

    render() {

        return(
            <div classname="Calendar-header">
                <div className="date-Selector"/** Picture of the calendar, using an array of squares to be able to click on/specify a specific date */>
                    <p>Month / Year</p>
                    
                </div>
                <div className="Appointments-header" /** text box relating to the selected date */>
                    Appointments:

                    <Button variant="primary" size="small">New Appointment</Button>
                </div>
                <div className="Notes-header" /** Text box relating to the selected date*/>
                    Notes:

                    <Button variant="primary" size="small">New Note</Button>
                </div>
            </div>
        );
    }
}