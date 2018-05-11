import React from "react";
import { render } from "react-dom";
import Counter from './counter';
import ReactCounter from './reactCounter';

render(
  <div>
    <Counter/>
    <ReactCounter/>
  </div>,
  document.getElementById("root")
);

