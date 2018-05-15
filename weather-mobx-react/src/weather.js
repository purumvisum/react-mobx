import shortid from 'shortid';
import {observer} from 'mobx-react';

// import {asyncAction} from "mobx-utils"
import React from "react";
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';

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
                        JSON.stringify(store.weatherData).length > 2 &&
                        <div>
                            City: {store.weatherData.city}<br/>
                            Now: {store.weatherData.current.temp} {store.weatherData.current.weather}<br/>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
