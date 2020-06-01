import React from 'react';
import './contactName.css';
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import CallIcon from '@material-ui/icons/Call';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { green, blueGrey} from '@material-ui/core/colors';

/*
Info on material-ui icons
https://material-ui.com/components/icons/
https://material-ui.com/components/material-icons/
*/

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
                        variant="light" 
                        size="sm"
                        onClick={() => { 
                            this.props.setInCall(this.toggle()) 
                        }}>
                        <CallIcon fontSize="small" style={{ color: green[500] }}/>   
                        </Button>
                </div>
                <div ><Button  variant="light" size="sm"><EditTwoToneIcon fontSize="small" style={{ color: blueGrey[500] }}/></Button></div>
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