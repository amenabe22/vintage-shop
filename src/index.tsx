import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Shop from './pages/Shop'
import Detail from './pages/detail'


ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
