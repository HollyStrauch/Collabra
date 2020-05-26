import React from 'react';
import { Dropdown, DropdownButton, MenuItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dropDown.css';

export default class dropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropTitle: this.props.dropTitle, vals: ["Soprano", "Alto", "Tenor", "Bass"] };
    }

    render() {
        return(

            <div>
                <DropdownButton
                    bsstyle="default"
                    fssize="small"
                    title={this.state.dropTitle}
                    key={1}
                    id="dropdown-size-small"
                >
                    <ul>

                    {this.state.vals.map((item) => <Dropdown.Item key={item.toString()} onClick={() => { this.setState(state => ({ dropTitle: item })) }}>{item}</Dropdown.Item>)}
                    
                    </ul>
                </DropdownButton>
            </div>

        );
    }

}