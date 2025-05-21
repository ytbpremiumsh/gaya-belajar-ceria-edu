
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { QuizResult } from '@/types';
import ResultSummary from '@/components/result/ResultSummary';
import { generatePdf } from '@/utils/generatePdf';
import AdSense from '@/components/ads/AdSense';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  let result = location.state?.result as QuizResult;
  
  // Ensure there's at least 1% difference between percentages
  if (result) {
    const { visual, auditory, kinesthetic } = result.percentage;
    
    // Check if any two percentages are equal
    if (visual === auditory || visual === kinesthetic || auditory === kinesthetic) {
      const adjustedPercentages = { ...result.percentage };
      
      // If visual equals auditory, adjust them
      if (visual === auditory) {
        adjustedPercentages.auditory -= 1;
        adjustedPercentages.visual += 1;
      }
      
      // If auditory equals kinesthetic, adjust them
      if (auditory === kinesthetic) {
        adjustedPercentages.kinesthetic -= 1;
        adjustedPercentages.auditory += 1;
      }
      
      // If visual equals kinesthetic, adjust them
      if (visual === kinesthetic) {
        adjustedPercentages.kinesthetic -= 1;
        adjustedPercentages.visual += 1;
      }
      
      // Update the result
      result = {
        ...result,
        percentage: adjustedPercentages
      };
    }
  }
  
  useEffect(() => {
    if (!result) {
      toast({
        title: "Error",
        description: "Hasil tes tidak ditemukan. Silahkan ambil tes terlebih dahulu.",
        variant: "destructive"
      });
      navigate('/quiz');
    }
    
    // Update document title with learn.ruangedukasi.com branding
    document.title = "Hasil Tes Gaya Belajar | learn.ruangedukasi.com";
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
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-pastel-blue/15 rounded-full blur-2xl -z-10"></div>
      
      {/* Top AdSense */}
      <AdSense adSlot="2678731669" />
      
      {/* Result Content */}
      <ResultSummary 
        result={result} 
        onTryAgain={handleTryAgain} 
        onDownloadPdf={handleDownloadPdf} 
      />
    </div>
  );
};

export default Result;
