import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};

let initialState = {
  videos: [],
  currentVideo: {}
};
// var store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore(initialState);
export default store;