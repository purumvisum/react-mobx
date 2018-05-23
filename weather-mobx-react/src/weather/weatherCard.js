import {observer} from 'mobx-react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardTitle } from 'material-ui/Card';

import React from "react";

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
