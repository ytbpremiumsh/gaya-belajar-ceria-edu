
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b py-3">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-bold text-lg">learn.ruangedukasi.com</div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Beranda
          </Link>
          <Link to="/quiz" className="text-sm font-medium transition-colors hover:text-primary">
            Mulai Tes
          </Link>
          <Link to="/insight" className="text-sm font-medium transition-colors hover:text-primary">
            Insight
          </Link>
        </nav>
        <Link 
          to="/quiz" 
          className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Mulai Tes
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
