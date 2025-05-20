
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { QuizResult } from '@/types';
import { quizQuestions } from '@/data/quizQuestions';
import QuizOption from '@/components/quiz/QuizOption';
import QuizProgress from '@/components/quiz/QuizProgress';
import { calculateResult } from '@/utils/calculateResult';

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
  
  const handleNext = () => {
    if (!selectedOption) {
      toast({
        title: "Pilih jawaban",
        description: "Silakan pilih salah satu jawaban untuk melanjutkan.",
        variant: "destructive"
      });
      return;
    }
    
    // Save answer
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedOption
    }));
    
    if (isLastQuestion) {
      // Calculate and navigate to results
      const result = calculateResult(
        answers,
        quizQuestions
      );
      
      navigate('/result', { 
        state: { 
          result: {
            ...result,
            // Include the last question's answer that hasn't been saved yet
            [currentQuestion.scores[selectedOption as keyof typeof currentQuestion.scores]]: 
              result[currentQuestion.scores[selectedOption as keyof typeof currentQuestion.scores] as keyof QuizResult] + 1
          }
        } 
      });
      return;
    }
    
    // Move to next question
    setSelectedOption(null);
    setCurrentQuestionIndex(prev => prev + 1);
  };
  
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      // Restore previous answer
      const prevQuestionId = quizQuestions[currentQuestionIndex - 1].id;
      setSelectedOption(answers[prevQuestionId] || null);
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-8">Tes Gaya Belajar</h1>
      
      <QuizProgress 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={quizQuestions.length} 
      />
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-6">
            {currentQuestion.question}
          </h2>
          
          <div className="space-y-4">
            <QuizOption 
              label="A" 
              text={currentQuestion.options.a} 
              selected={selectedOption === 'a'} 
              onClick={() => handleOptionSelect('a')} 
            />
            <QuizOption 
              label="B" 
              text={currentQuestion.options.b} 
              selected={selectedOption === 'b'} 
              onClick={() => handleOptionSelect('b')} 
            />
            <QuizOption 
              label="C" 
              text={currentQuestion.options.c} 
              selected={selectedOption === 'c'} 
              onClick={() => handleOptionSelect('c')} 
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrev} 
          disabled={currentQuestionIndex === 0}
        >
          Sebelumnya
        </Button>
        <Button onClick={handleNext}>
          {isLastQuestion ? 'Selesai' : 'Selanjutnya'}
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
