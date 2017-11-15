import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoarApp from "./App";
import SignIn from './sign_in';
import SignUp from './sign_up';
import Detail from "./detail";
import { Provider } from "redux-zero/react";
import { HashRouter, Switch, Route } from 'react-router-dom';
import store from "./store";
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/sign_up" component={SignUp} />
        <Route path="/App" component={BoarApp} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </HashRouter>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();