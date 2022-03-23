import * as React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Pricing, Landing } from './components';

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
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
