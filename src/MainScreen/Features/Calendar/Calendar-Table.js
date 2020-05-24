import React from 'react';
import './CalendarTable.css';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import { Row } from 'react-bootstrap';

/** Using a table format to create the look of a calendar with 31 days in it */

class CalendarTable extends Component {
    render() {
        return(
            <div>
                <BootstrapTable data={this.props.data}>
                    <TableHeaderColumn dataField='sunday'>
                        S
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='monday'>
                        M
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='tuesday'>
                        T
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='wednesday'>
                        W
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='Thursday'>
                        Th
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='friday'>
                        F
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='saturday'>
                        S
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default CalendarTable