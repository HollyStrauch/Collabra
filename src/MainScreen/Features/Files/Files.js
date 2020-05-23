import React from 'react';
import './Files.css';
import Filename from './Filename';
import { Element} from 'react-scroll'
import  Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';

var items = ["Filename1", "Filename2", "Filename3", "Filename4", "Filename5", "Filename6"];

export default class Files extends React.Component {
    render() {
        return (

            <div >
                <Element className="element" id="containerElement" style={{
                    position: 'relative',
                    height: '200px',
                    overflow: 'scroll',
                }}>
                    <ul>
                        {items.map((item) => <Filename key={item.toString()} name={item} />)}

                    </ul>
                </Element>
                <div className="Files-header">
                    <Button  variant="primary" size="small">Upload</Button>
                    <div style={{paddingLeft:'10px', paddingRight:'10px'}}>No File Selected...</div>
                    <Button  variant="outline-primary" size="small">Select File</Button>
                </div>
            </div>
        );
    }
}