import React from 'react';
import './Contacts.css';
import ContactName from './contactName';
import { Element } from 'react-scroll'
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from "reactjs-popup";



export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { people: [],  setInCall: props.setInCall, value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.setState({
        people: this.state.people.concat(this.state.value)
      });
    this.componentDidMount();

    
    
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

                    {this.state.people.map((person) =>
                        <ContactName key={person.toString()}
                            name={person}
                            setInCall={this.state.setInCall}
                            inCall={this.props.inCall}
                        />
                    )}

                </Element>
                <div>
                <Popup
                    trigger={<Button variant="outline-info" size="lg" block>Add Contact</Button>}
                    modal
                    closeOnDocumentClick
                >
                    {close => (
                        <div className="popup">
                            Who would you like to add?
                            <div className="content">
                                <div>
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        Name:
                                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                    <Button
                                        variant="outline-info"
                                        size="sm"
                                        
                                        onClick={() => {
                                            console.log("modal closed ");
                                            this.handleSubmit();
                                            close();
                                        }} >Add Contact</Button>
                                    </form>
                                </div>
                            </div>
 
                        </div>
                    )}
                </Popup>                                           
                </div>
 
                
            </div>
        );
    }
}