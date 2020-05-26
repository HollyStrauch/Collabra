import React from 'react';
import { Dropdown, DropdownButton, MenuItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dropDown.css';

export default class dropDown extends React.Component {


    render() {
        return(

            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Range
                    </Dropdown.Toggle>
                </Dropdown>

                <Dropdown.Menu>
                    <Dropdown.Item>Soprano</Dropdown.Item>
                    <Dropdown.Item>Alto</Dropdown.Item>
                </Dropdown.Menu>
            </div>

        );
    }

}
