import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import css from './styles/custom.styl';
import configureStore, { history } from './store';
import App from './container/App';
import PhotoGrid from './component/PhotoGrid';

const store = configureStore();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
