
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import AdSense from '../ads/AdSense';

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b py-3">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://www.ruangedukasi.web.id/wp-content/uploads/2020/02/logo-header.png" 
            alt="Ruang Edukasi" 
            className="h-8" 
          />
        </Link>
        
        {/* Desktop Navigation */}
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
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger className="p-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                  <img 
                    src="https://www.ruangedukasi.web.id/wp-content/uploads/2020/02/logo-header.png" 
                    alt="Ruang Edukasi" 
                    className="h-8 mb-4" 
                  />
                  <AdSense adSlot="2678731669" className="my-4" />
                </div>
                <nav className="flex flex-col p-4">
                  <Link to="/" className="py-3 px-2 text-sm font-medium transition-colors hover:text-primary border-b">
                    Beranda
                  </Link>
                  <Link to="/quiz" className="py-3 px-2 text-sm font-medium transition-colors hover:text-primary border-b">
                    Mulai Tes
                  </Link>
                  <Link to="/insight" className="py-3 px-2 text-sm font-medium transition-colors hover:text-primary border-b">
                    Insight
                  </Link>
                </nav>
                <div className="mt-auto p-4">
                  <AdSense adSlot="2678731669" className="mb-4" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
       
      </div>
    </header>
  );
};

export default AppHeader;
