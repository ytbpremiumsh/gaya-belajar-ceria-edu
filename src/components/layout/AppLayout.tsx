
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 container py-8">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
