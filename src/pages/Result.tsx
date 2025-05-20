
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { QuizResult } from '@/types';
import ResultSummary from '@/components/result/ResultSummary';
import { generatePdf } from '@/utils/generatePdf';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const result = location.state?.result as QuizResult;
  
  if (!result) {
    React.useEffect(() => {
      toast({
        title: "Error",
        description: "Hasil tes tidak ditemukan.",
        variant: "destructive"
      });
      navigate('/quiz');
    }, []);
    
    return null;
  }
  
  const handleTryAgain = () => {
    navigate('/quiz');
  };
  
  const handleDownloadPdf = () => {
    try {
      generatePdf(result);
      toast({
        title: "Berhasil",
        description: "PDF berhasil diunduh.",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error",
        description: "Gagal mengunduh PDF. Silakan coba lagi.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="w-full animate-fade-in">
      <ResultSummary 
        result={result} 
        onTryAgain={handleTryAgain} 
        onDownloadPdf={handleDownloadPdf} 
      />
    </div>
  );
};

export default Result;
