import { mount } from 'dashboard/dashboardApp';
import { useRef, useEffect } from 'react';

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
