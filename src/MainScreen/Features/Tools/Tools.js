import React from 'react';
import './Tools.css';
import RangedDropdown from './RangedDropdown'
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Files extends React.Component {
    constructor(props) {
        super(props);
        /* change this to true to make modal appear*/
        this.state = {dropTitle: 'BPM'};
      }

    render() {

        return (

            <div >
               <RangedDropdown dropTitle="BPM" start={20} range={230} />
            </div>
        );
    }


    
}
