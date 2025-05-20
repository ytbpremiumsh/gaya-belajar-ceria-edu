
import React, { useEffect } from 'react';
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
  
  useEffect(() => {
    if (!result) {
      toast({
        title: "Error",
        description: "Hasil tes tidak ditemukan. Silahkan ambil tes terlebih dahulu.",
        variant: "destructive"
      });
      navigate('/quiz');
    }
  }, [result, toast, navigate]);
  
  if (!result) {
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
    <div className="w-full py-6 animate-fade-in">
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      
      <ResultSummary 
        result={result} 
        onTryAgain={handleTryAgain} 
        onDownloadPdf={handleDownloadPdf} 
      />
    </div>
  );
};

export default Result;
