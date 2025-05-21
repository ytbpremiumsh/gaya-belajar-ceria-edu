import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Headphones, Move, Check } from 'lucide-react';
import { learningStyles } from '@/data/learningStyles';
import AdSense from '@/components/ads/AdSense';

const Insight = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Memahami Gaya Belajar</h1>
        <p className="text-lg text-muted-foreground">
          Setiap orang memiliki cara belajar yang berbeda. Berikut adalah penjelasan 
          detail tentang tiga gaya belajar utama.
        </p>
      </div>
      
      {/* Ad placement after introduction */}
      <AdSense adSlot="2678731669" className="my-8" />
      
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="w-16 h-16 rounded-full bg-pastel-blue flex items-center justify-center">
            <Eye className="h-8 w-8 text-blue-900" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{learningStyles.visual.title}</h2>
            <p className="text-lg text-muted-foreground">
              Belajar melalui apa yang dilihat
            </p>
          </div>
        </div>
        
        <Card className="card-pastel card-visual mb-6">
          <CardContent className="pt-6">
            <p className="text-lg mb-6">{learningStyles.visual.description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Karakteristik Pembelajar Visual:</h3>
            <ul className="space-y-2 mb-6">
              {learningStyles.visual.traits.map((trait, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">Strategi Belajar untuk Pembelajar Visual:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningStyles.visual.strategies.map((strategy, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-4">
                  <p>{strategy}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
         {/* Ad placement after introduction */}
      <AdSense adSlot="2678731669" className="my-8" />
      
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Media dan Alat Bantu Visual:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border border-pastel-blue rounded-lg text-center">
              Buku dengan Ilustrasi
            </div>
            <div className="p-4 border border-pastel-blue rounded-lg text-center">
              Video Pembelajaran
            </div>
            <div className="p-4 border border-pastel-blue rounded-lg text-center">
              Peta Pikiran (Mind Maps)
            </div>
            <div className="p-4 border border-pastel-blue rounded-lg text-center">
              Diagram &amp; Grafik
            </div>
            <div className="p-4 border border-pastel-blue rounded-lg text-center">
              Aplikasi Digital Visual
            </div>
            <div className="p-4 border border-pastel-blue rounded-lg text-center">
              Flashcards Warna-warni
            </div>
          </div>
        </div>
      </section>
      
      {/* Ad placement between sections */}
      <AdSense adSlot="2678731669" className="my-8" />
      
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="w-16 h-16 rounded-full bg-pastel-lavender flex items-center justify-center">
            <Headphones className="h-8 w-8 text-purple-900" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{learningStyles.auditory.title}</h2>
            <p className="text-lg text-muted-foreground">
              Belajar melalui apa yang didengar
            </p>
          </div>
        </div>
        
        <Card className="card-pastel card-auditory mb-6">
          <CardContent className="pt-6">
            <p className="text-lg mb-6">{learningStyles.auditory.description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Karakteristik Pembelajar Auditori:</h3>
            <ul className="space-y-2 mb-6">
              {learningStyles.auditory.traits.map((trait, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">Strategi Belajar untuk Pembelajar Auditori:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningStyles.auditory.strategies.map((strategy, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-4">
                  <p>{strategy}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Media dan Alat Bantu Auditori:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border border-pastel-lavender rounded-lg text-center">
              Podcast Edukasi
            </div>
            <div className="p-4 border border-pastel-lavender rounded-lg text-center">
              Audiobook
            </div>
            <div className="p-4 border border-pastel-lavender rounded-lg text-center">
              Rekaman Kuliah/Pelajaran
            </div>
            <div className="p-4 border border-pastel-lavender rounded-lg text-center">
              Diskusi Kelompok
            </div>
            <div className="p-4 border border-pastel-lavender rounded-lg text-center">
              Musik Sebagai Background
            </div>
            <div className="p-4 border border-pastel-lavender rounded-lg text-center">
              Voice Notes untuk Pengingat
            </div>
          </div>
        </div>
      </section>
      
      {/* Ad placement between sections */}
      <AdSense adSlot="2678731669" className="my-8" />
      
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="w-16 h-16 rounded-full bg-pastel-peach flex items-center justify-center">
            <Move className="h-8 w-8 text-orange-900" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{learningStyles.kinesthetic.title}</h2>
            <p className="text-lg text-muted-foreground">
              Belajar melalui praktik dan pengalaman
            </p>
          </div>
        </div>
        
        <Card className="card-pastel card-kinesthetic mb-6">
          <CardContent className="pt-6">
            <p className="text-lg mb-6">{learningStyles.kinesthetic.description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Karakteristik Pembelajar Kinestetik:</h3>
            <ul className="space-y-2 mb-6">
              {learningStyles.kinesthetic.traits.map((trait, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">Strategi Belajar untuk Pembelajar Kinestetik:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningStyles.kinesthetic.strategies.map((strategy, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-4">
                  <p>{strategy}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Media dan Alat Bantu Kinestetik:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border border-pastel-peach rounded-lg text-center">
              Eksperimen Langsung
            </div>
            <div className="p-4 border border-pastel-peach rounded-lg text-center">
              Simulasi &amp; Permainan
            </div>
            <div className="p-4 border border-pastel-peach rounded-lg text-center">
              Model 3D &amp; Objek Fisik
            </div>
            <div className="p-4 border border-pastel-peach rounded-lg text-center">
              Field Trip &amp; Study Tour
            </div>
            <div className="p-4 border border-pastel-peach rounded-lg text-center">
              Kartu Belajar Manipulatif
            </div>
            <div className="p-4 border border-pastel-peach rounded-lg text-center">
              Aplikasi Interaktif
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-16 bg-secondary rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Menggabungkan Gaya Belajar</h2>
        <p className="text-lg mb-6">
          Meskipun kamu mungkin memiliki gaya belajar dominan, menggabungkan berbagai 
          pendekatan gaya belajar dapat membantu meningkatkan pemahaman dan retensi. 
          Berikut beberapa strategi untuk menggabungkan tiga gaya belajar:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Visual + Auditori</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Menonton video dengan narasi atau penjelasan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Membaca materi sambil merekam dan mendengarkannya kembali</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Menggambar sambil menjelaskan konsep dengan suara keras</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Visual + Kinestetik</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Membuat model fisik dari diagram yang dipelajari</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Mencoba gerakan atau langkah sambil melihat tutorial visual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Bermain game edukasi yang menggabungkan visual dan gerakan</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Auditori + Kinestetik</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Mendengarkan audio sambil berjalan atau melakukan aktivitas ringan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Bermain peran berdasarkan instruksi verbal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Diskusi kelompok dengan komponen aktivitas praktis</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Visual + Auditori + Kinestetik</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Simulasi interaktif dengan panduan visual dan audio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Proyek kolaboratif dengan berbagai komponen sensori</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Field trip dengan panduan audio dan catatan visual</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Final ad placement before end of page */}
      <AdSense adSlot="2678731669" className="my-8" />
    </div>
  );
};

export default Insight;
