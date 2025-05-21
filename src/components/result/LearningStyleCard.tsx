
import React from 'react';
import { Eye, Headphones, Move } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LearningStyle, LearningStyleInfo } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

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
  const getIcon = () => {
    switch (type) {
      case 'visual':
        return <Eye className="h-4 w-4" />;
      case 'auditory':
        return <Headphones className="h-4 w-4" />;
      case 'kinesthetic':
        return <Move className="h-4 w-4" />;
      default:
        return <Eye className="h-4 w-4" />;
    }
  };
  
  const getCardStyles = () => {
    switch (type) {
      case 'visual':
        return {
          gradientClass: 'bg-gradient-to-br from-pastel-blue/40 to-pastel-blue/10',
          borderClass: 'border-pastel-blue',
          iconBgClass: 'bg-pastel-blue/70',
          iconTextClass: 'text-blue-900',
          progressColor: 'bg-pastel-blue'
        };
      case 'auditory':
        return {
          gradientClass: 'bg-gradient-to-br from-pastel-lavender/40 to-pastel-lavender/10',
          borderClass: 'border-pastel-lavender',
          iconBgClass: 'bg-pastel-lavender/70',
          iconTextClass: 'text-purple-900',
          progressColor: 'bg-pastel-lavender'
        };
      case 'kinesthetic':
        return {
          gradientClass: 'bg-gradient-to-br from-pastel-peach/40 to-pastel-peach/10',
          borderClass: 'border-pastel-peach',
          iconBgClass: 'bg-pastel-peach/70',
          iconTextClass: 'text-orange-900',
          progressColor: 'bg-pastel-peach'
        };
      default:
        return {
          gradientClass: '',
          borderClass: '',
          iconBgClass: '',
          iconTextClass: '',
          progressColor: ''
        };
    }
  };
  
  const styles = getCardStyles();
  
  return (
    <Card className={cn("overflow-hidden border-2 shadow-lg transition-all hover:shadow-xl", styles.gradientClass, styles.borderClass, isDominant && "transform scale-[1.02]")}>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-shrink-0">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shadow-inner", styles.iconBgClass)}>
              <div className={cn("w-8 h-8 rounded-md flex items-center justify-center shadow-md", "bg-white")}>
                {getIcon()}
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{styleInfo.title}</h3>
              <span className="text-lg font-bold">{percentage}%</span>
            </div>
            
            <div className="mb-2">
              <Progress className={cn("h-2", styles.progressColor.replace('bg-', 'bg-opacity-70 ') + ' [&>div]:' + styles.progressColor)} value={percentage} />
            </div>
            
            {isDominant && (
              <>
                <p className="mb-3 text-sm leading-relaxed">{styleInfo.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white/60 p-2 rounded-lg shadow-sm">
                    <h4 className={cn("text-sm font-semibold mb-1.5 border-b", styles.borderClass)}>
                      <span className="flex items-center gap-1">
                        <span className={styles.iconTextClass}>●</span> Karakteristik
                      </span>
                    </h4>
                    <ul className="space-y-0.5">
                      {styleInfo.traits.map((trait, index) => (
                        <li key={index} className="flex items-start gap-1 text-xs">
                          <span className="text-[0.65rem] mt-0.5">•</span>
                          <span>{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white/60 p-2 rounded-lg shadow-sm">
                    <h4 className={cn("text-sm font-semibold mb-1.5 border-b", styles.borderClass)}>
                      <span className="flex items-center gap-1">
                        <span className={styles.iconTextClass}>●</span> Rekomendasi Belajar
                      </span>
                    </h4>
                    <ul className="space-y-0.5">
                      {styleInfo.strategies.map((strategy, index) => (
                        <li key={index} className="flex items-start gap-1 text-xs">
                          <span className="text-[0.65rem] mt-0.5">•</span>
                          <span>{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
            
            {!isDominant && <p className="text-sm">{styleInfo.description}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningStyleCard;
