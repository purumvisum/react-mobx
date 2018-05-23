import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AppBar from 'material-ui/AppBar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Weather from '../weather/weather';
import AboutUs from '../aboutUs';
import NotMatch from '../notMatch';
import WeekendWeather from '../weather/weekendWeather';
import Store from '../store';

export default class Menu extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <AppBar
                        title={<span >Menu</span>}
                        iconElementLeft={
                            <IconMenu
                                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            >
                                <Link to="/forecast">
                                    <MenuItem primaryText="Weather Forecast" />
                                </Link>
                                <Link to="/about">
                                    <MenuItem primaryText="About Us" />
                                </Link>
                            </IconMenu>

                        }
                    />
                    <Switch>
                        <Route
                            exact
                            path="/forecast"
                            render={() => <Weather store={Store}/>} />
                        <Route
                            exact
                            path="/about"
                            component={AboutUs} />
                        <Route
                            path="/forecast/:id"
                            render={(props) => <WeekendWeather {...props} store={Store}/>} />
                        <Route
                            component={NotMatch} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
