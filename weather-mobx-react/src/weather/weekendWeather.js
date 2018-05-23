import React from "react";
import moment from "moment";

import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class WeekendWeather extends React.Component {

    render() {

        return (
            <List>
                {
                    store.weatherData.forecast.slice(0, 7).map((item) => {
                        return <ListItem
                            primaryText={moment(item.date).format('dddd')}
                            secondaryText={
                                <p>
                                    <span style={{color: '#000'}}>{item.weather}   </span>
                                    {`${item.low}°C - ${item.high}°C `}
                                </p>
                            }
                            rightIcon={<ActionInfo />} />
                    })
                }
            </List>
        );
    }
}
