
import React from "react";
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import Devtools from 'mobx-react-devtools';

@observer

export default class Counter extends React.Component {

    @observable count = 0;

    handleInc = () => {
        this.count++;
    }

    handleDec = () => {
        this.count--;
    }

    render() {
        return (
            <div>
                <Devtools/>
                Counter: {this.count} <br/>
                <button onClick = { this.handleInc }> + </button>
                <button onClick = { this.handleDec }> - </button>
            </div>
        );
    }


};