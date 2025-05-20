
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Share } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { QuizResult } from '@/types';
import LearningStyleCard from './LearningStyleCard';
import { learningStyles } from '@/data/learningStyles';
import ResultChart from './ResultChart';

interface ResultSummaryProps {
  result: QuizResult;
  onTryAgain: () => void;
  onDownloadPdf: () => void;
}

const ResultSummary: React.FC<ResultSummaryProps> = ({ result, onTryAgain, onDownloadPdf }) => {
  const { toast } = useToast();
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Hasil Tes Gaya Belajar',
        text: `Gaya belajar dominan saya adalah ${learningStyles[result.dominantStyle].title}!`
      })
      .catch((error) => {
        console.log('Error sharing:', error);
      });
    } else {
      toast({
        title: "Info",
        description: "Sharing tidak didukung di browser ini.",
      });
    }
  };

  // Get secondary styles sorted by percentage
  const secondaryStyles = Object.entries(result.percentage)
    .filter(([style]) => style !== result.dominantStyle)
    .sort(([, a], [, b]) => b - a);

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 
          bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Hasil Tes Gaya Belajar
        </h2>
        <p className="text-xl text-muted-foreground">
          Berdasarkan jawaban kamu, gaya belajar dominan kamu adalah:
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-10">
        <LearningStyleCard 
          type={result.dominantStyle} 
          percentage={result.percentage[result.dominantStyle]}
          styleInfo={learningStyles[result.dominantStyle]}
          isDominant={true}
        />
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Gaya Belajar Sekunder</h3>
          <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-slate-100">
            <ResultChart result={result} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {secondaryStyles.map(([style, percent]) => (
                <div key={style} className={`p-4 rounded-xl border-l-4 bg-white/60 ${
                  style === 'visual' ? 'border-pastel-blue' : 
                  style === 'auditory' ? 'border-pastel-lavender' : 
                  'border-pastel-peach'
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{learningStyles[style].title}</h4>
                    <span className="font-semibold">{percent}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {learningStyles[style].description.split('!')[0]}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-gradient-to-br from-secondary/30 to-background rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Gaya Belajar Campuran</h3>
          <p className="mb-4">
            Kamu memiliki kombinasi gaya belajar dengan dominasi {learningStyles[result.dominantStyle].title.toLowerCase()}.
            Manfaatkan strategi berikut untuk hasil belajar yang optimal:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <h4 className="font-medium mb-2">Kombinasi dengan Gaya Lain</h4>
              <ul className="space-y-1 text-sm">
                {secondaryStyles.map(([style]) => (
                  <li key={style} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      {result.dominantStyle === 'visual' && style === 'auditory' ? 'Rekam dan dengarkan kembali penjelasan sambil melihat ilustrasi' :
                       result.dominantStyle === 'visual' && style === 'kinesthetic' ? 'Buat model fisik dari apa yang kamu lihat dalam diagram' :
                       result.dominantStyle === 'auditory' && style === 'visual' ? 'Buatlah catatan dengan visual setelah mendengarkan' :
                       result.dominantStyle === 'auditory' && style === 'kinesthetic' ? 'Diskusikan sambil melakukan aktivitas ringan' :
                       result.dominantStyle === 'kinesthetic' && style === 'visual' ? 'Lihat demonstrasi sebelum mencoba sendiri' :
                       'Dengarkan instruksi sambil melakukan aktivitas fisik'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <h4 className="font-medium mb-2">Rekomendasi Media</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    {result.dominantStyle === 'visual' ? 'Video tutorial interaktif' : 
                     result.dominantStyle === 'auditory' ? 'Podcast dengan ilustrasi' : 
                     'Aplikasi pembelajaran dengan simulasi'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    {result.dominantStyle === 'visual' ? 'Infografik dengan audio' : 
                     result.dominantStyle === 'auditory' ? 'Forum diskusi online' : 
                     'Workshop dan praktik langsung'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <Link to="/insight" className="inline-block mt-4 text-primary underline underline-offset-4">
            Pelajari lebih lanjut tentang gaya belajar campuran
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <Button 
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 gap-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          onClick={onDownloadPdf}
        >
          Download Hasil (PDF)
        </Button>
        <Button 
          variant="outline" 
          onClick={onTryAgain}
          className="border border-primary/20 hover:border-primary/50 transition-all duration-300"
        >
          Coba Lagi
        </Button>
        <Button 
          variant="outline" 
          onClick={handleShare}
          className="gap-2 border border-primary/20 hover:border-primary/50 transition-all duration-300"
        >
          <Share className="h-4 w-4" />
          Bagikan
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-muted-foreground mb-2">Ingin tahu lebih lanjut tentang gaya belajar?</p>
        <Link 
          to="/insight" 
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-all duration-300"
        >
          Lihat Detail Gaya Belajar
        </Link>
      </div>
    </div>
  );
};

export default ResultSummary;
