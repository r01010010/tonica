import { createStore } from 'redux'

let store = createStore((state, action) => {
  return Object.assign({}, state);
});

export default store;
