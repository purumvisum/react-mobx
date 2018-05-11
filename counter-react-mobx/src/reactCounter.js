
import React from "react";

export default class ReactCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           count : 0
        };
    }

    handleInc = () => {
        let currentCount = this.state.count;
        this.setState({
            count: currentCount+1
        });
    }

    handleDec = () => {
        let currentCount = this.state.count;
        this.setState({
            count: currentCount-1
        });
    }

    render() {
        return (
            <div>
                Counter: {this.state.count} <br/>
                <button onClick = { this.handleInc }> + </button>
                <button onClick = { this.handleDec }> - </button>
            </div>
        );
    }


};