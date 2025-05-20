
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Eye, Headphones, Move } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  const handleStartTest = () => {
    navigate('/quiz');
  };
  
  const handleLearnMore = () => {
    navigate('/insight');
  };
  
  return (
    <div className="animate-fade-in">
      <section className="relative z-10 py-12 md:py-20 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 
            bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
            animate-fade-in">
            Temukan Gaya Belajar Unikmu
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto">
            Ketahui cara belajar paling efektif untuk dirimu dan tingkatkan potensimu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-1"
              onClick={handleStartTest}
            >
              Mulai Tes Sekarang
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20 hover:border-primary/50 transition-all duration-300"
              onClick={handleLearnMore}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gradient-to-b from-secondary/20 to-transparent rounded-3xl mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kenapa Perlu Mengetahui Gaya Belajar?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-pastel-blue/50 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Efektivitas Belajar</h3>
              <p className="text-muted-foreground">
                Mengenali gaya belajar membantu kamu memahami cara paling efektif untuk menyerap dan mengingat informasi baru.
              </p>
            </div>
            
            <div className="bg-white/80 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-pastel-lavender/50 flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-purple-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pengembangan Diri</h3>
              <p className="text-muted-foreground">
                Dengan mengenal gaya belajar, kamu dapat mengoptimalkan strategi belajar dan mengembangkan potensimu secara maksimal.
              </p>
            </div>
            
            <div className="bg-white/80 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-pastel-peach/50 flex items-center justify-center mb-4">
                <Move className="h-6 w-6 text-orange-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mengatasi Kesulitan</h3>
              <p className="text-muted-foreground">
                Kenali cara belajar yang sesuai untukmu dan atasi kesulitan belajar dengan metode yang tepat sesuai gaya belajarmu.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Tiga Gaya Belajar Utama</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Setiap orang memiliki cara belajar yang unik, namun umumnya cenderung pada salah satu dari tiga gaya belajar berikut:
          </p>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-pastel-blue/30 to-transparent border border-pastel-blue/50 shadow-md">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-pastel-blue flex items-center justify-center">
                  <Eye className="h-8 w-8 text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Visual</h3>
                <p className="text-muted-foreground">
                  Pembelajar visual belajar melalui apa yang mereka lihat. Mereka memahami konsep lebih baik melalui gambar, diagram, dan representasi visual.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-pastel-lavender/30 to-transparent border border-pastel-lavender/50 shadow-md">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-pastel-lavender flex items-center justify-center">
                  <Headphones className="h-8 w-8 text-purple-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Auditori</h3>
                <p className="text-muted-foreground">
                  Pembelajar auditori belajar melalui apa yang mereka dengar. Diskusi, ceramah, dan penjelasan verbal membantu mereka memahami konsep.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-pastel-peach/30 to-transparent border border-pastel-peach/50 shadow-md">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-pastel-peach flex items-center justify-center">
                  <Move className="h-8 w-8 text-orange-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Kinestetik</h3>
                <p className="text-muted-foreground">
                  Pembelajar kinestetik belajar melalui gerakan dan sentuhan. Mereka memahami konsep lebih baik dengan praktik dan pengalaman langsung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gradient-to-br from-pastel-blue/20 via-pastel-lavender/20 to-pastel-peach/20 rounded-3xl mb-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Gaya Belajar Campuran</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Kebanyakan orang memiliki kombinasi dari ketiga gaya belajar dengan satu gaya yang lebih dominan. 
            Mengenali kombinasi unikmu akan membantu mengoptimalkan proses belajar.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl 
              transition-all duration-300 transform hover:-translate-y-1"
            onClick={handleStartTest}
          >
            Temukan Gaya Belajarmu
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
