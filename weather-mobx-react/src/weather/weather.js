import {observer} from 'mobx-react';
import React from "react";
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import WeatherCard from './weatherCard';

@observer
export default class Weather extends React.Component {

    setLocation = (value) => {
        this.props.store.location = value
    }

    render() {
        const styles = {
            root: {
                maxWidth: '320px',
                margin: '0 auto'
            },
            mediumIcon: {
                width: 40,
                height: 40,
                color: '#00bcd4'
            }
        };

        return (
        <div>
            <div
                style={styles.root}
            >
                <TextField
                    floatingLabelText={'Pick the location'}
                    floatingLabelFixed
                    onChange = {
                        (e, value) => {
                            this.setLocation(value)
                        }
                    }
                />
                <IconButton
                    onClick = { ()=> {
                        store.loadWeatherGenerator()
                    } }
                    type="submit"
                    iconStyle={styles.mediumIcon}
                    tooltip="Submit"
                >
                    <SearchIcon />
                </IconButton>

                <div>
                    {
                        store.loadWeatherError &&
                        <div>
                            {store.loadWeatherError}
                        </div>
                    }

                    {
                        JSON.stringify(store.weatherData).length > 2 &&

                        <WeatherCard
                            city = {store.weatherData.city}
                            temp = {store.weatherData.current.temp}
                            weather = {store.weatherData.current.weather}
                            img = {store.weatherData.image_url}
                        />
                    }
                </div>
            </div>
        </div>

        );
    }
}
