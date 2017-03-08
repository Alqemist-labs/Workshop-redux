import React from 'react';

const Filters = ({ visibilityFilter, dispatch }) => {
  return (
    <div>
      <Link
        active={ visibilityFilter === 'SHOW_ALL' }
        text="Tout"
        onClick={ e => dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: 'SHOW_ALL',
        })}
      />
      {', '}
      <Link
        active={ visibilityFilter === 'SHOW_ACTIVE' }
        text="Actifs"
        onClick={ e => dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: 'SHOW_ACTIVE',
        })}
      />
      {', '}
      <Link
        active={ visibilityFilter === 'SHOW_COMPLETED' }
        text="Complétés"
        onClick={ e => dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: 'SHOW_COMPLETED',
        })}
      />
    </div>
  );
};

const Link = ({ active, text, onClick }) => {
  if (active) {
    return <span>{ text }</span>
  } else {
    return (
      <a
        href="#"
        onClick={ e => {
          e.preventDefault();
          onClick();
        }}
      >
        { text }
      </a>
    )
  }
};

export default Filters;
