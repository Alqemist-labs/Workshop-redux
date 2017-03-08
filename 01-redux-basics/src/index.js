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
  /* TODO */
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
const store = /* TODO */

// 04 - On dispatch une action de type INCREMENT au clic gauche ('click')
/* TODO */

// 05 - On dispatch une action de type DECREMENT au clic droit ('contextmenu')
/* TODO */

// 06 - On subscribe au store, en lui passant une fonction 'renderCounter' qui s'occupe d'ajouter la valeur actuelle
// du counter dans document.body.innerText
/* TODO */

// 07 - On pense à lancer le render de notre app une première fois !
/* TODO */


/*
  Et c'est tout !
  Attaquons maintenant une app plus complexe dans /02-redux-advanced/src/index.js.
 */
