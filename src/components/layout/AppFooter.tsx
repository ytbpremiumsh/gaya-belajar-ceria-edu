
import { Link } from 'react-router-dom';

const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-secondary py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <img 
              src="https://www.ruangedukasi.web.id/wp-content/uploads/2020/02/logo-header.png" 
              alt="Ruang Edukasi" 
              className="h-8" 
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Link to="/" className="text-sm hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link to="/quiz" className="text-sm hover:text-primary transition-colors">
              Mulai Tes
            </Link>
            <Link to="/insight" className="text-sm hover:text-primary transition-colors">
              Insight
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © {currentYear} Ruang Edukasi
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
