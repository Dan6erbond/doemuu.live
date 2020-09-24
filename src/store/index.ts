import { createStore, compose } from "redux";

import rootReducer from "./reducer";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const applicationStore = createStore(
  rootReducer,
  composeEnhancers()
);

export default applicationStore;
