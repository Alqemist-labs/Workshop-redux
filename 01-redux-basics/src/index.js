import createStore from '../../redux/createStore';
import './index.css';

/*
 01 - Notre premier reducer !
 *Un reducer est une fonction qui prends en paramètre :*
 - Le state actuel du store
 - Une action (un objet qui décrit un évènement dans notre app), par ex :
 {
 type: 'MON_ACTION',
 data: { id: 1, name: 'Jean' }
 }

 Le reducer a ensuite pour mission de retourner un nouveau state, modifié suivant l'action qu'il a reçu.
 /!\ Extrêmement important, le reducer retourne toujours un NOUVEAU state, il ne mute JAMAIS l'ancien state.
 */

const defaultState = {
  counter: 0,
};

const counterReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

/*
 02 - Une fois notre premier reducer fait, il est temps d'implémenter createStore,
 qui nous permettra de créer notre Store Redux. (/redux/src/createStore.js)
 */

/*
 03 - Une fois createStore implémenté, et les tests qui passent,
 testons l'utilisation de notre store !
 On crée notre store, en y passant notre reducer
 */
const store = createStore(counterReducer);

// 04 - On dispatch une action de type INCREMENT au clic gauche ('click')
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

// 05 - On dispatch une action de type DECREMENT au clic droit ('contextmenu')
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  store.dispatch({ type: 'DECREMENT' })
});

// 06 - On subscribe au store, en lui passant une fonction 'renderCounter' qui s'occupe d'ajouter la valeur actuelle
// du counter dans document.body.innerText
const renderCounter = () => {
  const state = store.getState();
  const counter = state.counter;
  document.body.innerText = counter;
};


store.subscribe(renderCounter);

// 07 - On pense à lancer le render de notre app une première fois !
renderCounter();

/*
  Et c'est tout !
  Attaquons maintenant une app plus complexe dans /02-redux-advanced/src/index.js.
 */
