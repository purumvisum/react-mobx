import React from "react";
import { render } from "react-dom";
import {autorun} from 'mobx';
import 'babel-polyfill';

import Weather from './weather';
import Store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render(
    <MuiThemeProvider>
      <Weather
          store = {Store}
      />
    </MuiThemeProvider>,
  document.getElementById("root")
);



