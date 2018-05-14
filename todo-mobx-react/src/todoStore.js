import {observable, computed} from 'mobx';

class Todo {
    @observable value;
    @observable id;
    @observable complete;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}

class Store  {
    @observable todos = [];
    @observable filter = '';
    @computed get filteredTodos () {
        let matchesFilter = new RegExp(this.filter, 'i');
        return this.todos.filter( todo => !this.filter || matchesFilter.test(todo.value))
    }

    createTodo (value) {
        this.todos.push(new Todo(value))
    }

    completeTodo (id) {
        const currentTodo = this.todos.find((item) => {
            return item.id === id
        })
        currentTodo.complete = !currentTodo.complete
    }
}

export default store = window.store = new Store;