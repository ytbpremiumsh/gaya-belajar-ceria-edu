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
        text: `Gaya belajar dominan saya adalah ${learningStyles[result.dominantStyle].title}!`,
        url: 'https://learn.ruangedukasi.com'
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

  const getStyleBorderClass = (style: string) => {
    switch (style) {
      case 'visual': return 'border-pastel-blue';
      case 'auditory': return 'border-pastel-lavender';
      case 'kinesthetic': return 'border-pastel-peach';
      default: return 'border-gray-300';
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
      <div className="grid grid-cols-1 gap-6 mb-8">
        {/* Dominant Learning Style */}
        <LearningStyleCard 
          type={result.dominantStyle} 
          percentage={result.percentage[result.dominantStyle]}
          styleInfo={learningStyles[result.dominantStyle]}
          isDominant={true}
        />
        
        {/* AdSense Ad in middle of content - high engagement area */}
        <AdSense adSlot="2678731669" />

        {/* Chart and Secondary Styles */}
        <div className="mt-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-100">
            <ResultChart result={result} />
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Gaya Belajar Sekunder</h3>
              <div className="space-y-4">
                {secondaryStyles.map(([style, percent]) => (
                  <Card 
                    key={style} 
                    className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-10 rounded-full ${getStyleColorClass(style)}`}></div>
                          <h4 className="font-medium text-lg">{learningStyles[style as keyof typeof learningStyles].title}</h4>
                        </div>
                        <span className="font-semibold text-lg">{percent}%</span>
                      </div>
                      
                      <Progress 
                        className="h-2.5 mb-3" 
                        value={percent} 
                        style={{
                          backgroundColor: `${style === 'visual' ? '#A7C7E7' : style === 'auditory' ? '#E6E6FA' : '#FFD8BE'}30`,
                          ['--tw-bg-opacity' as any]: '0.3'
                        }}
                      />
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {learningStyles[style as keyof typeof learningStyles].description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        <div className={`border-l-2 ${getStyleBorderClass(style)} pl-3`}>
                          <h5 className="text-sm font-medium mb-1">Karakteristik Utama:</h5>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                            {learningStyles[style as keyof typeof learningStyles].traits.slice(0, 3).map((trait, idx) => (
                              <li key={idx} className="text-sm">{trait}</li>
                            ))}
                          </ul>
                        </div>
                        <div className={`border-l-2 ${getStyleBorderClass(style)} pl-3`}>
                          <h5 className="text-sm font-medium mb-1">Rekomendasi Belajar:</h5>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                            {learningStyles[style as keyof typeof learningStyles].strategies.slice(0, 3).map((strategy, idx) => (
                              <li key={idx} className="text-sm">{strategy}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-2 border-t border-gray-100">
                        <Link 
                          to="/insight" 
                          className={`text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity
                            ${style === 'visual' ? 'text-blue-600' : 
                              style === 'auditory' ? 'text-purple-600' : 'text-orange-600'}`}
                        >
                          Lihat detail gaya belajar {learningStyles[style as keyof typeof learningStyles].title}
                        </Link>
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
