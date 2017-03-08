import combineReducers from './combineReducers';

const reducerA = (state = 0, action = {}) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const reducerB = (state = 0, action = {}) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'DOUBLE':
      return state * 2;
    default:
      return state;
  }
};

describe('combineReducers', () => {
  let reducer;
  beforeEach(() => {
    reducer = combineReducers({
      counterA: reducerA,
      counterB: reducerB,
    });
  });

  it('should return a reducer', () => {
    expect(typeof reducer).toBe('function');
  });

  it('should behave like a normal reducer, and affect only the correct part of the state tree', () => {
    let state = {
      counterA: 1,
      counterB: 1,
    };

    const newState = reducer(state, {
      type: 'DOUBLE'
    });

    expect(newState.counterB).toBe(2);
    expect(newState.counterA).toBe(1);
  });

  it('should be able to update the state tree at different places', () => {
    let state = {
      counterA: 1,
      counterB: 1,
    };

    let newState = reducer(state, {
      type: 'INCREMENT',
    });

    newState = reducer(newState, {
      type: 'INCREMENT',
    });

    newState = reducer(newState, {
      type: 'DECREMENT',
    });

    expect(newState.counterB).toBe(2);
    expect(newState.counterA).toBe(2);
  });

  it('should handle a default state', () => {
    const newState = reducer();

    expect(newState.counterA).toBe(0);
    expect(newState.counterA).toBe(0);
  })
});
