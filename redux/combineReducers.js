/*
  combineReducer est une fonction qui :
  - prends un reducerObj: un objet composé de réducer en argument
    ex: {
      key1: myReducer,
      key2: myOtherReducer,
    }
  - retourne un unique reducer, qui s'occupe de composer les reducers du reducerObj

  Le reducer qu'elle retourne est comme les autres reducers :
  - Il prends le state actuel en premier argument
  - L'action en second argument
  - Il retourne un nouveau state.

  Dans le reducer retourné, nous allons utiliser Array.reduce() pour
  créer le nouveau state à partir des reducers du ReducerObj.
 */
const combineReducers = reducersObj => (state = {}, action) => {
  /* TODO */
};

export default combineReducers;
