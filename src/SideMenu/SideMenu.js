/*
Information on Modals:
http://reactcommunity.org/react-modal/
*/

import React from 'react';
import './SideMenu.css';
import ReactModal from 'react-modal';

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        /* change this to true to make modal appear*/
        this.state = {modal1Open: false};
      }

    render() {
        return (
            <div>
                <div className="SideMenu-header">
                    Hello, I am a side menu
                </div>
                <ReactModal isOpen={this.state.modal1Open}
                      onRequestClose={()=>{this.setState(state => ({modal1Open: false}))}}>
                    <p> Hello I am Modal</p>
                 </ReactModal>   
            </div>
        );
    }
}