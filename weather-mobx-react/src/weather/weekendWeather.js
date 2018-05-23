import React from "react";
import moment from "moment";
import {observer} from 'mobx-react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

@observer
export default class WeekendWeather extends React.Component {
    componentDidMount() {
        if ( !Boolean( this.props.store.weatherData.forecast) ) {
            this.props.store.location = this.props.match.params.id;
            this.props.store.loadWeatherGenerator()
        }
    }

    render() {
        return (
            <div>
                {
                    store.weatherData.forecast &&
                    <List>
                        {
                            store.weatherData.forecast.slice(0, 7).map((item) => {
                                return <ListItem
                                    key = {new Date(item.date)}
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
                }
            </div>
        );
    }
}
