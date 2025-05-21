
import React from 'react';
import { cn } from '@/lib/utils';

interface QuizOptionProps {
  label: string;
  text: string;
  selected: boolean;
  onSelect: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ label, text, selected, onSelect }) => {
  return (
    <div 
      className={cn(
        "card-pastel bg-white p-4 cursor-pointer transition-all duration-300 shadow hover:shadow-md",
        selected && "option-selected"
      )}
      onClick={onSelect}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
            {label}
          </div>
        </div>
        <div>
          <p className="text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default QuizOption;
