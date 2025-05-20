
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Share } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { QuizResult } from '@/types';
import LearningStyleCard from './LearningStyleCard';
import { learningStyles } from '@/data/learningStyles';

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

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Hasil Tes Gaya Belajar</h2>
        <p className="text-xl text-muted-foreground">
          Berdasarkan jawaban kamu, gaya belajar dominan kamu adalah:
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-3">
          <LearningStyleCard 
            type={result.dominantStyle} 
            percentage={result.percentage[result.dominantStyle]}
            styleInfo={learningStyles[result.dominantStyle]}
            isDominant={true}
          />
        </div>
        
        {Object.entries(result.percentage)
          .filter(([style]) => style !== result.dominantStyle)
          .sort(([, a], [, b]) => b - a)
          .map(([style, percent]) => (
            <LearningStyleCard
              key={style}
              type={style as any}
              percentage={percent}
              styleInfo={learningStyles[style]}
            />
          ))
        }
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <Button 
          className="bg-primary gap-2"
          onClick={onDownloadPdf}
        >
          Download Hasil (PDF)
        </Button>
        <Button 
          variant="outline" 
          onClick={onTryAgain}
        >
          Coba Lagi
        </Button>
        <Button 
          variant="outline" 
          onClick={handleShare}
          className="gap-2"
        >
          <Share className="h-4 w-4" />
          Bagikan
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-muted-foreground mb-2">Ingin tahu lebih lanjut tentang gaya belajar?</p>
        <Link 
          to="/insight" 
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Lihat Detail Gaya Belajar
        </Link>
      </div>
    </div>
  );
};

export default ResultSummary;
