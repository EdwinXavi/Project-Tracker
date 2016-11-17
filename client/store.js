import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import promise from 'redux-promise';
import rootReducer from './reducers/index';

export default function configureStore(initialState) {
  const FinalCreateStore = compose(applyMiddleware(promise)(createStore));
  const store = FinalCreateStore(rootReducer, initialState);
  return store;
}

export const history = syncHistoryWithStore(browserHistory, configureStore());
