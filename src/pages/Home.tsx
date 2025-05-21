
import React from 'react';
import AdSense from '@/components/ads/AdSense';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Headphones, Move } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center animate-fade-in">
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Kenali Gaya Belajar Unikmu
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Temukan metode belajar yang paling sesuai dengan dirimu dan tingkatkan 
          potensi belajarmu dengan tes gaya belajar yang cepat dan akurat.
        </p>
        <Link to="/quiz">
          <Button size="lg" className="text-lg px-8 py-6">
            Mulai Tes Sekarang
          </Button>
        </Link>
      </section>

      <section className="py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tentang Gaya Belajar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Setiap orang memiliki cara belajar yang berbeda. Mengenali gaya belajarmu 
            dapat membantu mengoptimalkan proses belajar dan meningkatkan efektivitas belajar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-pastel card-visual">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-pastel-blue flex items-center justify-center">
                  <Eye className="h-6 w-6 text-blue-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Visual</h3>
              <p className="text-center">
                Belajar melalui apa yang kamu lihat. Lebih menyukai gambar, 
                diagram, dan representasi visual.
              </p>
            </CardContent>
          </Card>

          <Card className="card-pastel card-auditory">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-pastel-lavender flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-purple-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Auditori</h3>
              <p className="text-center">
                Belajar melalui apa yang kamu dengar. Lebih menyukai diskusi, 
                ceramah, dan penjelasan verbal.
              </p>
            </CardContent>
          </Card>

          <Card className="card-pastel card-kinesthetic">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-pastel-peach flex items-center justify-center">
                  <Move className="h-6 w-6 text-orange-900" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Kinestetik</h3>
              <p className="text-center">
                Belajar melalui pengalaman dan praktik langsung. Lebih menyukai 
                aktivitas fisik dan hands-on.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 w-full bg-secondary rounded-3xl p-8 md:p-12 my-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Mengapa Perlu Mengetahui Gaya Belajar?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Meningkatkan Efektivitas Belajar</h3>
            <p>
              Dengan mengenali gaya belajarmu, kamu dapat menerapkan strategi 
              belajar yang paling efektif sesuai preferensi kamu, sehingga proses 
              belajar menjadi lebih mudah dan menyenangkan.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Mengoptimalkan Waktu Belajar</h3>
            <p>
              Penerapan metode belajar yang tepat akan membuat waktu belajarmu 
              lebih efisien, sehingga kamu dapat memaksimalkan pemahaman dalam 
              waktu yang lebih singkat.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Meningkatkan Daya Ingat</h3>
            <p>
              Informasi lebih mudah diingat ketika disajikan sesuai dengan 
              preferensi belajarmu, membantu meningkatkan retensi dan pemahaman 
              jangka panjang.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Mengurangi Stres Belajar</h3>
            <p>
              Belajar dengan cara yang sesuai dengan preferensimu akan lebih 
              menyenangkan dan dapat mengurangi stres serta frustrasi saat 
              menghadapi materi yang sulit.
            </p>
          </div>
        </div>
    {/* AdSense Ad */}
        <AdSense adSlot="2678731669" />

        <div className="text-center mt-10">
          <Link to="/quiz">
            <Button size="lg">
              Mulai Tes Gaya Belajar
            </Button>
          </Link>
        </div>

    {/* AdSense Ad */}
      <AdSense adSlot="2678731669" />
        
      </section>
    </div>
  );
};

export default Home;
