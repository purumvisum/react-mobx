import {observable, computed} from 'mobx';

class Store  {
    @observable todos = [
        "1 todo",
        "2 todo",
        "3 todo"
    ]
    @observable filter = ''
    @computed get filteredTodos () {
        var matchesFilter = new RegExp(this.filter, 'i')
        return this.todos.filter( todo => !this.filter || matchesFilter.test(todo))
    }
}

export default store = window.store = new Store;