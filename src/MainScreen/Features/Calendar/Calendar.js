import React from 'react';
import './Calendar.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';



export default class Calendar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {button: true}
        this.buttonClick = this.buttonClick.bind(this);
    }
    
    apptClick(i) {/**the appointment button clicked */

    }
    noteClick(i) {/** the notes button clicked */

    }
    buttonClick(i) {
        this.setState({button: !this.state.button})
        
    }
   
    render() {

        return(
            <div classname="Calendar-header">
                <div className="date-Selector"/** Buttons representing days in the month. Click on one and it will show app/notes for that day */>
                    Month/Year
                    <div>
                        <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.buttonClick} size='small'> 01 </button>
                        <button className='day2' size='small'>02</button>
                        <button className='day3' size='small'>03</button>
                        <button className='day4' size='small'>04</button>
                        <button className='day5' size='small'>05</button>
                        <button className='day6' size='small'>06</button>
                        <button className='day7' size='small'>07</button>
                    </div>
                    <div>
                        <button className='day8' size='small'>08</button>
                        <button className='day9' size='small'>09</button>
                        <button className='day10' size='small'>10</button>
                        <button className='day11' size='small'>11</button>
                        <button className='day12' size='small'>12</button>
                        <button className='day13' size='small'>13</button>
                        <button className='day14' size='small'>14</button>
                    </div>
                    <div>
                        <button className='day15' size='small'>15</button>
                        <button className='day16' size='small'>16</button>
                        <button className='day17' size='small'>17</button>
                        <button className='day18' size='small'>18</button>
                        <button className='day19' size='small'>19</button>
                        <button className='day20' size='small'>20</button>
                        <button className='day21' size='small'>21</button>
                    </div>
                    <div>
                        <button className='day22' size='small'>22</button>
                        <button className='day23' size='small'>23</button>
                        <button className='day24' size='small'>24</button>
                        <button className='day25' size='small'>25</button>
                        <button className='day26' size='small'>26</button>
                        <button className='day27' size='small'>27</button>
                        <button className='day28' size='small'>28</button>
                    </div>

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