import { mount } from 'marketing/marketingApp';
import { useRef, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Header } from './components';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <div ref={ref} />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
