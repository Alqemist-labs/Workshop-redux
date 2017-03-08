/*
  createStore est une fonction qui :
    - prends en argument un reducer
    - retourne un Store

  ce Store expose 3 méthodes :
    - getState -> Retourne le state actuel du store
    - subscribe -> Permet de subscribe au store, en passant une fonction (callback) qui sera appellée à
      chaque modification du state.
      Retourne une fonction, qui permettra, une fois invoquée, d'unsubscribe.
    - dispatch -> Permet de dispatcher une nouvelle action, qui viendra modifier le state
      (en utilisant le reducer)
*/

const createStore = (reducer) => {
  /* TODO */
};

export default createStore;
