import React from 'react';
import { Dropdown, DropdownButton, MenuItem } from 'react-bootstrap'
import './RangedDropdown.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class RangedDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropTitle: this.props.dropTitle, vals: [] };
    }

    componentDidMount() {
        var tempArray = this.range(this.props.start, this.props.range);
        this.setState(state => ({ vals: tempArray }));
    }

    render() {
        return (

            <div >
                <DropdownButton
                    bsstyle="default"
                    bssize="small"
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

    range(startAt, size) {
        return [...Array(size).keys()].map(i => i + startAt);
    }
}