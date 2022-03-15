import ReactDOM from 'react-dom';
import App from './app';

// Function to mount the app.
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If in "development" mode.
if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.querySelector('#marketingAppRoot');
  if (devRootEl) {
    mount(devRootEl);
  }
}

// If in container.
export { mount };
