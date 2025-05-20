
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
      
      <div className="grid grid-cols-1 gap-8 mb-10">
        <LearningStyleCard 
          type={result.dominantStyle} 
          percentage={result.percentage[result.dominantStyle]}
          styleInfo={learningStyles[result.dominantStyle]}
          isDominant={true}
        />
        
        <div className="mt-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-100">
            <ResultChart result={result} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {secondaryStyles.map(([style, percent]) => (
                <div key={style} className={`p-5 rounded-xl border-l-4 bg-white/60 shadow-sm hover:shadow-md transition-all duration-300 ${
                  style === 'visual' ? 'border-pastel-blue' : 
                  style === 'auditory' ? 'border-pastel-lavender' : 
                  'border-pastel-peach'
                }`}>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-lg">{learningStyles[style as any].title}</h4>
                    <span className="font-semibold text-lg">{percent}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {learningStyles[style as any].description.split('!')[0]}.
                  </p>
                </div>
              ))}
            </div>
          </div>
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
