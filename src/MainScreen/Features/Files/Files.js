import React from 'react';
import './Files.css';
import Filename from './Filename';
import { Element,  animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

var items = ["Filename1", "Filename2", "Filename3", "Filename1", "Filename2", "Filename3"];

export default class Files extends React.Component {
    render() {
        return (

            <div>
                <Element className="element" id="containerElement" style={{
                    position: 'relative',
                    height: '200px',
                    overflow: 'scroll',
                    marginBottom: '100px'
                }}>
                    <ul>
                        {items.map((item) => <Filename key={item.key} name={item} />)}

                    </ul>
                </Element>
            </div>
        );
    }
}