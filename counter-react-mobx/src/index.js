import React from "react";
import { render } from "react-dom";
import {observable} from 'mobx';
import TimerView from './timer';

var appState = observable({
    timer: 2
});

setInterval(function tick() {
    appState.timer += 1;
}, 1000);

render(
  <div>
      <h1>  sdfsadfasdf </h1>
      <TimerView
          appState= {appState}
      />
  </div>,
  document.getElementById("root")
);

