// import shortid from 'shortid';
import {observer} from 'mobx-react';
import React from "react";
import TodoView from "./todoView";

@observer
export default class TodoList extends React.Component {


    render() {
        let store = this.props.store;
        const filteredTodos = store.filteredTodos;
        const todoList = filteredTodos.map(item => {
            return <li> {item} </li>
        });
        return (
            <div>
                <input
                    onChange = {(e) => {
                    store.filter = e.target.value
                }}
                />
                <ul>
                    {todoList}
                </ul>

            </div>
        );
    }
}
