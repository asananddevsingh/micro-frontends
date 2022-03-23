import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'; // This is the internal library used by react-router-dom.
import App from './app';

// Function to mount the app.
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (typeof onNavigate === 'function') {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

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
  const devRootEl = document.querySelector('#marketingAppRoot');
  if (devRootEl) {
    mount(devRootEl, { defaultHistory: createBrowserHistory() });
  }
}

// If in container.
export { mount };
