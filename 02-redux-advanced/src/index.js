import React from 'react';
import './index.css';
import { render } from 'react-dom';
import createStore from '../../redux/createStore';
import combineReducers from '../../redux/combineReducers';
import TodoApp from './components/todoApp';

/*
  08 - L'objectif de ce second projet est d'implémenter une simple app de TodoList.
  L'idée est de pouvoir :
  - Voir nos todos
  - En ajouter une
  - En supprimer une
  - Toggle l'état complété d'une todo
  - Filtrer nos todos par statut (complété, non complété, tout)
  On va en premier temps implémenter nos reducers dans ./reducers.js, et les importer.
*/
import { todosReducer, visibilityFilterReducer } from './reducers';

/*
  09 - Une fois nos reducers faits, il est temps d'implémenter combineReducers,
  qui va nous permettre d'assembler nos deux reducers en un seul (/redux/src/combineReducers.js)
*/

/*
  10 - On va ensuite combiner nos deux reducers grâce à combineReducer
*/
const reducer = /* TODO */

const store = /* TODO */

/*
  11 - On prépare ensuite la fonction qui s'occupe de render toute notre app
*/

const renderApp = () => {
  /* TODO */
};

/*
  12 - Et on subscribe au store en lui passant cette fonction, pour re-render à chaque modification du store
*/
/* TODO */

/*
  13 - On oublie pas de render notre app une première fois !
 */
/* TODO */

/*
  14 - On peut maintenant faire un peu de refacto de nos composants pour faire nos actions creators (actions.js).
*/

/*
 /!\ Important /!\
 A noter que globalement, cette approche de rendu (en subscribant manuellement au store, et en lui passant une fonction
 qui re-render l'app) n'est pas conseillée.

 C'est une manière simpliste de faire marcher Redux, mais qui a quelques désavantages :
 - Peu performant, toute l'app est sollicitée à chaque changement de state
 - Les méthodes dispatch et le state ne sont accessible que depuis le Root Component, il faut les passer d'enfants en enfants

 C'est à ça que react-redux, la librairie de Redux pour React sert :
 Brancher facilement (et directement) des composants React au store, pour éviter ces pbs.

 Nous verrons ça au prochain Workshop :)
 */
