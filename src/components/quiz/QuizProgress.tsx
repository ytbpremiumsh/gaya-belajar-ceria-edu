
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number; // Added progress prop
}

const QuizProgress: React.FC<QuizProgressProps> = ({ currentQuestion, totalQuestions, progress }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-muted-foreground">Pertanyaan {currentQuestion} dari {totalQuestions}</span>
        <span className="text-sm font-medium">{Math.floor(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default QuizProgress;
