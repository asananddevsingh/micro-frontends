import * as React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Signin, Signup } from './components';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default function App(props) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        {/* Here Router is a memory router. */}
        <Router history={props.history}>
          <Switch>
            <Route path="/auth/signin" component={Signin} />
            <Route path="/auth/signup" component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
