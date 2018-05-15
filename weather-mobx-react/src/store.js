import {mobx, observable, computed, autorun, flow} from 'mobx';

// class Todo {
//     @observable value;
//     @observable id;
//     @observable complete;
//
//     constructor(value) {
//         this.value = value;
//         this.id = Date.now();
//         this.complete = false;
//     }
// }

class Store  {
    @observable location = '';
    @observable weatherData = {};


    loadWeatherGenerator = flow(function*(city) {
        const response = yield fetch(
            `https://abnormal-weather-api.herokuapp.com/cities/search?city=Minsk`
        );
        const data = yield response.json();
        this.weatherData = data;
    });
    // @computed get filteredTodos () {
    //     let matchesFilter = new RegExp(this.filter, 'i');
    //     return this.todos.filter( todo => !this.filter || matchesFilter.test(todo.value))
    // }

    // createTodo (value) {
    //     this.todos.push(new Todo(value))
    // }
    //
    // completeTodo (id) {
    //     const currentTodo = this.todos.find((item) => {
    //         return item.id === id
    //     })
    //     currentTodo.complete = !currentTodo.complete
    // }
}


export default store = window.store = new Store;


autorun(() => {
    // Assuming that profile.asJson returns an observable Json representation of profile,
    // send it to the server each time it is changed, but await at least 300 milliseconds before sending it.
    // When sent, the latest value of profile.asJson will be used.
    console.log('store.location', store.location)
    console.log('store.weatherData', store.weatherData)
});