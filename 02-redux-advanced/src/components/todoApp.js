import React from 'react';
import TodoInput from './todoInput';
import VisibleTodos from './todos';
import Filters from './filters';

const todoApp = ({ dispatch, state }) => (
  <div>
    <TodoInput dispatch={ dispatch } />
    <VisibleTodos todos={ state.todos } visibilityFilter={ state.visibilityFilter } dispatch={ dispatch } />
    <Filters visibilityFilter={ state.visibilityFilter } dispatch={ dispatch } />
  </div>
);
export default todoApp;
