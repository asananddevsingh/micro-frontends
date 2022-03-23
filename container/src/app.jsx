import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Header, MarketingApp } from './components';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
