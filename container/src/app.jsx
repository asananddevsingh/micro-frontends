import { mount } from 'marketing/marketingApp';
import { useRef, useEffect } from 'react';

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return (
    <div>
      <h1>Hello Contianer!</h1>
      <div ref={ref} />
    </div>
  );
};

export default App;
