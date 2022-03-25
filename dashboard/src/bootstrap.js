import { createApp } from 'vue';
import Dashboard from './components/dashboard.vue';

// Function to mount the app.
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If in "development" mode.
if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.querySelector('#dashboardAppRoot');
  if (devRootEl) {
    mount(devRootEl);
  }
}

// If in container.
export { mount };
