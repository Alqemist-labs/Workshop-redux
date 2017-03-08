import createStore from './createStore';

const defaultState = {
  counter: 0,
};

const mockedReducer = (state = defaultState, action) => {
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

describe('createStore', () => {
  let store;

  beforeEach(() => {
    store = createStore(mockedReducer);
  });

  it('should return a Store exposing the correct methods', () => {
    expect(typeof store.getState === 'function').toBe(true);
    expect(typeof store.subscribe === 'function').toBe(true);
    expect(typeof store.dispatch === 'function').toBe(true);
  });

  it('should initialize the state with the reducer default state(s)', () => {
    expect(store.getState()).toBe(defaultState);
  });

  it('should allow to dispatch actions, and modify the state accordingly', () => {
    store.dispatch({ type: 'INCREMENT' });

    expect(store.getState()).toEqual({ counter: 1 });
  });

  it('should allow to dispatch multiple actions, and modify the state accordingly', () => {
    store.dispatch({ type: 'INCREMENT' });
    store.dispatch({ type: 'INCREMENT' });
    store.dispatch({ type: 'INCREMENT' });
    store.dispatch({ type: 'DECREMENT' });

    expect(store.getState()).toEqual({ counter: 2 });
  });

  it('should allow to subscribe to the store, and call the passed callback on state change', () => {
    const spyCallback = jest.fn();
    store.subscribe(spyCallback);
    store.dispatch({ type: 'DECREMENT'});

    expect(spyCallback.mock.calls.length).toBe(1);
    expect(store.getState()).toEqual({ counter: -1 });
  });

  it('should allow to subscribe multiple times to the store, and track each state change', () => {
    const spyCallback = jest.fn();
    const spyCallback2 = jest.fn();

    store.subscribe(spyCallback);
    store.dispatch({ type: 'DECREMENT'});
    store.subscribe(spyCallback2);
    store.dispatch({ type: 'DECREMENT'});
    store.dispatch({ type: 'INCREMENT'});
    store.dispatch({ type: 'INCREMENT'});

    expect(spyCallback.mock.calls.length).toBe(4);
    expect(spyCallback2.mock.calls.length).toBe(3);
    expect(store.getState()).toEqual({ counter: 0 });
  });
});
