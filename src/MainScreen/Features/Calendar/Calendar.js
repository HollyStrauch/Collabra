import React from 'react';
import './Calendar.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import CalendarTable from './Calendar-Table.js';

var days = [
    {sunday: 1, monday: 2, tuesday: 3, wednesday: 4, thursday: 5, friday: 6, saturday: 7},
    {sunday: 8, monday: 9, tuesday: 10, wednesday: 11, thursday: 12, friday: 13, saturday: 14},
    {sunday: 15, monday: 16, tuesday: 17, wednesday: 18, thursday: 19, friday: 20, saturday: 21},
    {sunday: 22, monday: 22, tuesday: 24, wednesday: 25, thursday: 26, friday: 27, saturday: 28},
    {sunday: 29, monday: 30, tuesday: 31, wednesday: 1, thursday: 2, friday: 3, saturday: 4},
];

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
                <div className="date-Selector"/** Picture of the calendar, table with a header at the top with month/year */>
                    <p>Month / Year</p>
                    <CalendarTable data = {day}/>
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