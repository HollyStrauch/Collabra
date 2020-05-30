import React from 'react';
import './contactName.css';
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class ContactName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {setInCall: props.setInCall, callAvailable: true};
    }


    render() {
        return (
            <div className="contactName-header">
                <div className="contactName-text">{this.props.name}</div>
                <div className="contactName-buttons">
                <div ><Button  
                        variant="primary" 
                        size="sm"
                        onClick={() => { 
                            this.props.setInCall(this.toggle()) 
                        }}>
                        Call</Button>
                </div>
                <div ><Button  variant="primary" size="sm">Edit</Button></div>
                </div>
            </div>
        );
    }

    toggle(){
        if (!this.props.inCall){
            return this.props.name;
        } 
        return this.props.inCall;
    }

}