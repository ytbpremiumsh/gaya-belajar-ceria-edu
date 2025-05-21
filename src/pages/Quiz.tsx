
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { quizQuestions } from '@/data/quizQuestions';
import QuizOption from '@/components/quiz/QuizOption';
import QuizProgress from '@/components/quiz/QuizProgress';
import { calculateResult, AnswerMap } from '@/utils/calculateResult';

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [selectedOption, setSelectedOption] = useState<'a' | 'b' | 'c' | null>(null);
  
  const question = quizQuestions.find(q => q.id === currentQuestion);
  
  const totalQuestions = quizQuestions.length;
  const progress = (currentQuestion / totalQuestions) * 100;
  
  const handleOptionSelect = (option: 'a' | 'b' | 'c') => {
    setSelectedOption(option);
  };
  
  const handleNextQuestion = () => {
    if (!selectedOption) {
      toast({
        title: "Pilih jawaban",
        description: "Silahkan pilih salah satu jawaban untuk melanjutkan.",
        variant: "destructive"
      });
      return;
    }
    
    // Save the answer
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: selectedOption
    }));
    
    // Move to next question or finish quiz
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    } else {
      // Calculate result and navigate to result page
      const result = calculateResult(answers, quizQuestions);
      navigate('/result', { state: { result } });
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(answers[currentQuestion - 1] || null);
    }
  };
  
  useEffect(() => {
    // If there's an answer already for this question, select it
    if (answers[currentQuestion]) {
      setSelectedOption(answers[currentQuestion]);
    } else {
      setSelectedOption(null);
    }
  }, [currentQuestion, answers]);
  
  if (!question) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <QuizProgress progress={progress} currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
      
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 my-8">
        <h2 className="text-lg md:text-xl font-semibold mb-6">
          {question.question}
        </h2>
        
        <div className="space-y-4 mb-8">
          <QuizOption
            selected={selectedOption === 'a'}
            onSelect={() => handleOptionSelect('a')}
            label="A"
            text={question.options.a}
          />
          <QuizOption
            selected={selectedOption === 'b'}
            onSelect={() => handleOptionSelect('b')}
            label="B"
            text={question.options.b}
          />
          <QuizOption
            selected={selectedOption === 'c'}
            onSelect={() => handleOptionSelect('c')}
            label="C"
            text={question.options.c}
          />
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline"
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 1}
            className="border-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            Sebelumnya
          </Button>
          <Button 
            onClick={handleNextQuestion}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
          >
            {currentQuestion === totalQuestions ? 'Lihat Hasil' : 'Selanjutnya'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
