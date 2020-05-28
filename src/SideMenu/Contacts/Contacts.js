import React from 'react';
import './Contacts.css';
import ContactName from './contactName';
import { Element } from 'react-scroll'
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { people: [],  setInCall: props.setInCall };
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

                        {this.state.people.map((person) => <ContactName key={person.toString()} name={person}  setInCall={this.state.setInCall}/>)}

                </Element>
                <div>
                    <Button  variant="outline-info" block size="lg">Add Contact</Button>                                        
                </div>
            </div>
        );
    }
}