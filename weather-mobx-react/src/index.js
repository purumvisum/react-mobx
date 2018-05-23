import React from "react";
import { render } from "react-dom";
import 'babel-polyfill';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from "./navigation/menu";

render(
    <MuiThemeProvider>
        <Menu/>
    </MuiThemeProvider>,
  document.getElementById("root")
);



