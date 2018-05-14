import shortid from 'shortid';
import {observer} from 'mobx-react';
import React from "react";

@observer
export default class TodoList extends React.Component {


    render() {
        let store = this.props.store;
        const filteredTodos = store.filteredTodos;
        const todoList = filteredTodos.map(item => {
            return <div>
                <input
                    type="checkbox"
                    onClick= {() => {
                        store.completeTodo(item.id)
                    }}
                    checked={item.complete}/>
                <li key = {shortid.generate()}> {item.value} </li>
            </div>
        });
        return (
            <div>
                Search
                <input
                    onChange = {(e) => {
                        store.filter = e.target.value
                    }}
                />
                <br/>
                Add New

                <input
                    onKeyPress = {(e) => {
                        if (e.charCode === 13 && e.target.value.trim() !== '') {
                            store.createTodo(e.target.value);
                            e.target.value = ''
                        }

                    }}
                />
                <ul>
                    {todoList}
                </ul>

            </div>
        );
    }
}
