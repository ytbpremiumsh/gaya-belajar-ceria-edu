
import React from 'react';
import { Eye, Headphones, Move } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LearningStyle, LearningStyleInfo } from '@/types';

interface LearningStyleCardProps {
  type: LearningStyle;
  percentage: number;
  styleInfo: LearningStyleInfo;
  isDominant?: boolean;
}

const LearningStyleCard: React.FC<LearningStyleCardProps> = ({ 
  type, 
  percentage, 
  styleInfo, 
  isDominant = false 
}) => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'eye':
        return <Eye className="h-6 w-6" />;
      case 'headphones':
        return <Headphones className="h-6 w-6" />;
      case 'move':
        return <Move className="h-6 w-6" />;
      default:
        return <Eye className="h-6 w-6" />;
    }
  };
  
  const getCardStyles = () => {
    switch (type) {
      case 'visual':
        return 'card-visual';
      case 'auditory':
        return 'card-auditory';
      case 'kinesthetic':
        return 'card-kinesthetic';
      default:
        return '';
    }
  };

  return (
    <div 
      className={cn(
        "card-pastel p-6", 
        getCardStyles(),
        isDominant && "transform scale-[1.02] shadow-lg"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {getIcon(styleInfo.icon)}
          <h3 className="text-xl font-semibold">{styleInfo.title}</h3>
        </div>
        <div className="text-2xl font-bold">{percentage}%</div>
      </div>
      
      {isDominant && (
        <>
          <p className="mb-4 text-base">{styleInfo.description}</p>
          
          <h4 className="font-medium mb-2">Karakteristik:</h4>
          <ul className="mb-4 space-y-1">
            {styleInfo.traits.slice(0, 3).map((trait, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{trait}</span>
              </li>
            ))}
          </ul>
          
          <h4 className="font-medium mb-2">Rekomendasi Belajar:</h4>
          <ul className="space-y-1">
            {styleInfo.strategies.slice(0, 3).map((strategy, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{strategy}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      
      {!isDominant && <p className="text-base">{styleInfo.description}</p>}
    </div>
  );
};

export default LearningStyleCard;
