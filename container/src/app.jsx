import { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Header, Progress } from './components';

const MarketingAppLazy = lazy(() => import('./components/marketingApp'));
const AuthAppLazy = lazy(() => import('./components/authApp'));
const DashboardAppLazy = lazy(() => import('./components/dashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthAppLazy
                  onSignIn={() => setIsSignedIn(true)}
                  onSignOut={() => setIsSignedIn(false)}
                />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardAppLazy />
              </Route>
              <Route path="/">
                <MarketingAppLazy />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
