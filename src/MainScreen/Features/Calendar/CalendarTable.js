import React from 'react';
import './Calendar.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

/** Create 5x7 squares (possibly an array), labeling each with the numbers 1-31. Heading will be a month and year
 * Each square will be clickable, which will allow the "appointment" and "note" button to know what day is selected
 * Each square will be remember the note&appointments set for its day
 * 
 * When a square is clicked, it will display the appointments and notes that it has in a text box to the left. 
 * 
 */

function Square(props) {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}

 class CalendarTable extends React.Component{

    constructor(props){
        super(props);
        //this.state = {i};
    }

    renderDay(i) {
        return (
            <Square
                value={i}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return(
            <div>
                <div className='weekOne'>
                    {this.day(0)}
                    {this.day(1)}
                    {this.day(2)}
                    {this.day(3)}
                    {this.day(4)}
                    {this.day(5)}
                    {this.day(6)}
                </div>
                <div className='weekTwo'>
                    {this.day(7)}
                    {this.day(8)}
                    {this.day(9)}
                    {this.day(10)}
                    {this.day(11)}
                    {this.day(12)}
                    {this.day(13)}
                </div>
                <div className='weekThree'>
                    {this.day(14)}
                    {this.day(15)}
                    {this.day(16)}
                    {this.day(17)}
                    {this.day(18)}
                    {this.day(19)}
                    {this.day(20)}
                </div>
                <div className='weekFour'>
                    {this.day(21)}
                    {this.day(22)}
                    {this.day(23)}
                    {this.day(24)}
                    {this.day(25)}
                    {this.day(26)}
                    {this.day(27)}
                </div>
                <div className='weekFive'>
                    {this.day(28)}
                    {this.day(29)}
                    {this.day(30)}
                    {this.day(31)}
                    {this.day(32)}
                    {this.day(33)}
                    {this.day(34)}
                </div>
            </div>
        );

    }

 }