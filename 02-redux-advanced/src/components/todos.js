import React from 'react';

const VisibleTodos = ({ todos, visibilityFilter, dispatch }) => {
  const getFilteredTodos = (todos, visibilityFilter) => {
    switch(visibilityFilter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed);
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  return(
    <ul>
      {
        getFilteredTodos(todos, visibilityFilter).map(todo => (
          <li key={ todo.id }>
            <Todo
              text={ todo.text }
              completed={ todo.completed }
              onClick={ e => dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id,
              }) }
            />
            <button
              onClick={ e => dispatch({
                type: 'REMOVE_TODO',
                id: todo.id,
              })}
              style={{ marginLeft: 10 }}
            >
              Supprimer
            </button>
          </li>
        ))
      }
    </ul>
  )
};

const Todo = ({ text, completed, onClick }) => (
  <span
    style={{ textDecoration: completed ? 'line-through' : 'none', cursor: 'pointer' }}
    onClick={ onClick }
  >
    { text }
  </span>
);

export default VisibleTodos;
