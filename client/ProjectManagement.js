import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import css from './styles/custom.styl';
import configureStore, { history } from './store';

import LoginContainer from './container/LoginContainer';
import HomePageContainer from './container/HomePageContainer';
import ForecastContainer from './container/ForecastContainer';


const store = configureStore();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LoginContainer} />
      <Route path="/home" component={HomePageContainer} />
      <Route path="/Forecasting" component={ForecastContainer} />
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
