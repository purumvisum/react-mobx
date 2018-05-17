import shortid from 'shortid';
import {observer} from 'mobx-react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardTitle } from 'material-ui/Card';

import React from "react";
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';

@observer
export default class WeatherCard extends React.Component {

    render() {

        return (
            <Card>
                <CardHeader
                    title={this.props.city}
                    subtitle={this.props.weather}
                />
                <CardMedia
                    overlay={
                        <CardTitle
                            title= { `${this.props.temp} °C` }
                            subtitle={this.props.weather} />}
                >
                    <img src={this.props.img} alt={this.props.weather} />
                </CardMedia>

            </Card>
        );
    }
}
