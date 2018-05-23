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
    @observable loadWeatherError = '';


    loadWeatherGenerator = flow(function*(city) {

        this.loadWeatherError = '';
        this.weatherData = {};

        const response = yield fetch(
            `https://abnormal-weather-api.herokuapp.com/cities/search?city=${this.location}`
        );

        // const weatherOpenApi = yield fetch(
        //     `http://api.openweathermap.org/data/2.5/forecast?APPID=ae6050de6496b1c975184a7b097f43cb&q=Minsk&units=metric`
        // );


        //  const weatherOpenApi = yield fetch(
        //     `api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7&APPID=ae6050de6496b1c975184a7b097f43cb`
        // );

            // http://api.openweathermap.org/data/2.5/forecast?APPID=ae6050de6496b1c975184a7b097f43cb&q=Minsk&units=metric

        const data = yield response.json();
        if (data.error) {
            this.loadWeatherError = data.error
        } else {
            this.weatherData = data;
        }

    });
}


export default store = window.store = new Store;


autorun(() => {
    // Assuming that profile.asJson returns an observable Json representation of profile,
    // send it to the server each time it is changed, but await at least 300 milliseconds before sending it.
    // When sent, the latest value of profile.asJson will be used.
    // console.log('store.location', store.location)
    console.log('store.loadWeatherError', store.loadWeatherError)
    console.log('store.weatherData', store.weatherData)
});