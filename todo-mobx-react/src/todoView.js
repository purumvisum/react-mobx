import React from "react";

export default class TodoView extends React.Component {
    render() {
        return (
            <li>
                {this.props.li}
            </li>
        );
    }

}