import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'; // This is the internal library used by react-router-dom.
import App from './app';

// Function to mount the app.
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (typeof onNavigate === 'function') {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate(location) {
      const { pathname: nextPathname } = location;
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If in "development" mode.
if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.querySelector('#authAppRoot');
  if (devRootEl) {
    mount(devRootEl, { defaultHistory: createBrowserHistory() });
  }
}

// If in container.
export { mount };
