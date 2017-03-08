import { v4 as uuid } from 'uuid';

/*
 state = {
 todos: [], // Géré todosReducer
 visibility_filter: 'SHOW_ALL' || 'SHOW_ACTIVE' || 'SHOW_COMPLETED',  // Géré par visibilityFilterReducer
 }

 Actions :
 'ADD_TODO',
 'REMOVE_TODO',
 'TOGGLE_TODO',
 'SET_VISIBILITY_FILTER',
 */

export const todoReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        text: action.text,
        id: uuid(),
        completed: false,
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todoReducer(undefined, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return todoReducer(todo, action);
        } else {
          return todo;
        }
      });
    case 'REMOVE_TODO':
      return state.filter(todo => {
        return todo.id !== action.id;
      });
    default:
      return state
  }
};

export const visibilityFilterReducer = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

