import React from 'react';
import './Contacts.css';
import ContactName from './contactName';
import { Element } from 'react-scroll'
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';

var people = ["Axl Rose", "Slash", "Michael Scott", "Jim Halpert", "Pam Beasley", "Stanley Hudson", "Dwight Schrute", "Phyllis",
"Kevin Malone", "Meredith", "Creed Bratton", "Taika Waititi", "David Wallace"];

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { people: [] };
    }

    componentDidMount() {
        var tempArray = JSON.parse(localStorage.getItem('contacts'));
        console.log(tempArray);
        this.setState(state => ({ people: tempArray }));
    }

    render() {
        return (

            <div >
                <Element className="element" id="containerElement" style={{
                    position: 'relative',
                    height: '598px',
                    overflow: 'scroll',
                }}>        

                        {this.state.people.map((person) => <ContactName key={person.toString()} name={person} />)}

                </Element>
                <div>
                    <Button  variant="outline-info" block size="lg">Add Contact</Button>                                        
                </div>
            </div>
        );
    }
}