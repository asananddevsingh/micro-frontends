import { mount } from 'marketing/marketingApp';
import { useRef, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components';

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div ref={ref} />
      </div>
    </BrowserRouter>
  );
};

export default App;
