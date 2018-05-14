import React from "react";
import { render } from "react-dom";
import {observable} from 'mobx';
import TodoList from './todo';
import TodoStore from './todoStore';
import shortid from 'shortid';

render(
  <div>
      <h1>  TODOS </h1>
      <TodoList
          store = {TodoStore}
      />
  </div>,
  document.getElementById("root")
);

