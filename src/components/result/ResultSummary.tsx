
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, Share, RefreshCw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { QuizResult } from '@/types';
import LearningStyleCard from './LearningStyleCard';
import { learningStyles } from '@/data/learningStyles';
import ResultChart from './ResultChart';
import AdSense from '../ads/AdSense';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

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

  const getStyleColorClass = (style: string) => {
    switch (style) {
      case 'visual': return 'bg-pastel-blue';
      case 'auditory': return 'bg-pastel-lavender';
      case 'kinesthetic': return 'bg-pastel-peach';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 
          bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Hasil Tes Gaya Belajar
        </h2>
        <p className="text-xl text-muted-foreground">
          Berdasarkan jawaban kamu, gaya belajar dominan kamu adalah:
        </p>
      </div>
      
      {/* Main Section */}
      <div className="grid grid-cols-1 gap-8 mb-10">
        {/* Dominant Learning Style */}
        <LearningStyleCard 
          type={result.dominantStyle} 
          percentage={result.percentage[result.dominantStyle]}
          styleInfo={learningStyles[result.dominantStyle]}
          isDominant={true}
        />
        
        {/* AdSense Ad */}
        <AdSense adSlot="2678731669" />

        {/* Chart and Secondary Styles */}
        <div className="mt-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-100">
            <ResultChart result={result} />
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6">Gaya Belajar Sekunder</h3>
              <div className="space-y-6">
                {secondaryStyles.map(([style, percent]) => (
                  <Card key={style} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-10 rounded-full ${getStyleColorClass(style)}`}></div>
                          <h4 className="font-medium text-lg">{learningStyles[style as any].title}</h4>
                        </div>
                        <span className="font-semibold text-lg">{percent}%</span>
                      </div>
                      
                      <Progress className="h-3 mb-4" value={percent} />
                      
                      <p className="text-sm text-muted-foreground">
                        {learningStyles[style as any].description.split('.')[0] + '.'}
                      </p>
                      
                      <div className="mt-4 grid grid-cols-1 gap-2">
                        <div>
                          <h5 className="text-sm font-medium mb-2">Karakteristik Utama:</h5>
                          <p className="text-sm text-muted-foreground">
                            {learningStyles[style as any].traits[0]}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium mb-2">Rekomendasi Belajar:</h5>
                          <p className="text-sm text-muted-foreground">
                            {learningStyles[style as any].strategies[0]}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <Button 
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 gap-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          onClick={onDownloadPdf}
        >
          <Download className="h-4 w-4" /> Download Hasil (PDF)
        </Button>
        <Button 
          variant="outline" 
          onClick={onTryAgain}
          className="border border-primary/20 hover:border-primary/50 transition-all duration-300 gap-2"
        >
          <RefreshCw className="h-4 w-4" /> Coba Lagi
        </Button>
        <Button 
          variant="outline" 
          onClick={handleShare}
          className="gap-2 border border-primary/20 hover:border-primary/50 transition-all duration-300"
        >
          <Share className="h-4 w-4" /> Bagikan
        </Button>
      </div>
      
      {/* Bottom Links */}
      <div className="text-center">
        <p className="text-muted-foreground mb-2">Ingin tahu lebih lanjut tentang gaya belajar?</p>
        <Link 
          to="/insight" 
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-all duration-300"
        >
          Lihat Detail Gaya Belajar
        </Link>
      </div>
      
      {/* Bottom AdSense */}
      <AdSense adSlot="2678731669" />
    </div>
  );
};

export default ResultSummary;
