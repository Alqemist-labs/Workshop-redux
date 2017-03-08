import React from 'react';

const TodoInput = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input
        type="text"
        placeholder="todo"
        ref={ node => input = node }
      />
      <button
        onClick={ e => {
          dispatch({
            type: 'ADD_TODO',
            text: input.value,
          });
          input.value = "";
        }}
        style={{ marginLeft: 10 }}
      >
        Ajouter
      </button>
    </div>
  );
};

export default TodoInput;
