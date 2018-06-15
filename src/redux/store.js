import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// const myRouterMiddleware = myRouterMiddleware(history);

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
