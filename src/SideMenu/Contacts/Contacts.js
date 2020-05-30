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

    componentDidMount() {
        var tempArray = JSON.parse(localStorage.getItem('contacts'));
        console.log(tempArray);
        this.setState(state => ({ people: tempArray }));
    }

    handleSubmit(event) {
    alert('"' + this.state.value + '"' + ' was added to your contact list');
    this.setState({
        people: this.state.people.concat(this.state.value)
      });
    this.componentDidMount();
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
                                        variant="primary"
                                        size="lg"
                                        block
                                        onClick={() => {
                                            this.handleSubmit();
                                            close();
                                        }} >Save</Button>
                                        <Button
                                            variant="secondary"
                                            size="lg"
                                            block 
                                            onClick={() => {
                                                close();  
                                            }}             
                                        >
                                        Cancel
                                        </Button>
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