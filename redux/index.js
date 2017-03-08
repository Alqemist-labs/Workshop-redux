import createStore from './createStore';
import combineReducers from './combineReducers';

/*
  Ce fichier, index.js, Sert à exporter toutes les méthodes de redux
*/
export {
  createStore,
  combineReducers,
  /*applyMiddleware,*/
  /*compose,*/
  /*bindActionCreators,*/
}

/*
  Nous allons voir, et réimplémenter, 2 des 5 méthodes exposées par la lib.
  Les 3 méthodes restantes étant un peu plus spécifiques, nous en parlerons brièvement ici :

  - applyMiddleware :
    Permet d'étendre Redux avec des fonctionnalités custom.

    C'est la plus importante des 3 méthodes. Elle permet de rajouter des "étapes" entre le moment
    où une action est dispatchée, et le moment ou l'action arrive dans le reducer.

    Ces middlewares permettent notamment des choses comme :
    - Logger toutes les actions dispatchées
    - Utiliser des promises dans les actions (pour aller fetcher de la data)
    - Logger les exceptions
    - etc.

  - compose :
    Assez utilitaire, compose permet de composer des fonctions entre elles.
    par ex, f1(f2(f3))) devriendrait compose(f1, f2, f3).
    C'est tout.
    C'est une fonction utilisé en interne (dans applyMiddleware par ex), et parfois utilisé
    dans certains cas précis (pour brancher les DevTools redux à son store par ex).

  - bindActionCreators :
    Extrêmement spécifique (je ne l'ai pour ma part jamais utilisé), permet de wrapper les actions
    creators (on verra en détail ce que c'est), avec la méthode dispatch() du store.

    Permet de remplacer dispatch(myActionCreator) par boundMyActionCreator();
    Sert à priori pour passer des actions creators à un composant qui n'a pas conscience de Redux.
    Dans la pratique, très peu rencontré.
*/
