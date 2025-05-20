
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-white to-secondary/10">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-pastel-blue/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-pastel-lavender/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-pastel-peach/20 blur-3xl pointer-events-none"></div>
      
      <AppHeader />
      <main className="flex-1 container py-8 relative z-10">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
