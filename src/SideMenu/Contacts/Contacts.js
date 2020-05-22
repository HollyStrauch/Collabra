import React from 'react';
import './Contacts.css';
import contactName from './contactName';
import { Element,  animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';

var items = ["Axl Rose", "Slash", "Michael Scott", "Jim Halpert", "Pam Beasley", "Stanley Hudson"];

export default class Contacts extends React.Component {
    render() {
        return (

            <div >
                <Element className="element" id="containerElement" style={{
                    position: 'relative',
                    height: '625px',
                    overflow: 'scroll',
                }}>
                    <ul>
                        {items.map((item) => <contactName key={item.key} name={item} />)}

                    </ul>
                </Element>
                <div className="Contacts-header">
                    <Button  variant="primary" block size="sm">Add Contact</Button>                                        
                </div>
            </div>
        );
    }
}