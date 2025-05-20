
import React from 'react';
import { Eye, Headphones, Move, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LearningStyle, LearningStyleInfo } from '@/types';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

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
        return {
          gradientClass: 'bg-gradient-to-br from-pastel-blue/40 to-pastel-blue/10',
          borderClass: 'border-pastel-blue',
          iconBgClass: 'bg-pastel-blue/50',
          iconTextClass: 'text-blue-900'
        };
      case 'auditory':
        return {
          gradientClass: 'bg-gradient-to-br from-pastel-lavender/40 to-pastel-lavender/10',
          borderClass: 'border-pastel-lavender',
          iconBgClass: 'bg-pastel-lavender/50',
          iconTextClass: 'text-purple-900'
        };
      case 'kinesthetic':
        return {
          gradientClass: 'bg-gradient-to-br from-pastel-peach/40 to-pastel-peach/10',
          borderClass: 'border-pastel-peach',
          iconBgClass: 'bg-pastel-peach/50',
          iconTextClass: 'text-orange-900'
        };
      default:
        return {
          gradientClass: '',
          borderClass: '',
          iconBgClass: '',
          iconTextClass: ''
        };
    }
  };

  const styles = getCardStyles();

  return (
    <div 
      className={cn(
        "rounded-2xl p-6 border shadow-md transition-all hover:shadow-lg", 
        styles.gradientClass,
        styles.borderClass,
        isDominant && "transform scale-[1.02] shadow-lg"
      )}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner",
          styles.iconBgClass
        )}>
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center shadow-lg",
            styles.iconTextClass,
            "bg-white"
          )}>
            {getIcon(styleInfo.icon)}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">{styleInfo.title}</h3>
              <div className="flex items-center gap-2">
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full transition-all duration-1000 rounded-full",
                      type === 'visual' ? 'bg-pastel-blue' : 
                      type === 'auditory' ? 'bg-pastel-lavender' : 
                      'bg-pastel-peach'
                    )}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-lg font-bold">{percentage}%</span>
              </div>
            </div>
          </div>
          
          {isDominant && (
            <>
              <p className="mb-6 text-base leading-relaxed">{styleInfo.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-1">
                    <span className={cn("text-sm", styles.iconTextClass)}>●</span> 
                    Karakteristik
                  </h4>
                  <ul className="space-y-3">
                    {styleInfo.traits.slice(0, 3).map((trait, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={cn(
                          "h-5 w-5 rounded-full flex items-center justify-center mt-0.5",
                          styles.iconBgClass
                        )}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-tight">{trait}</span>
                      </li>
                    ))}
                    <li>
                      <HoverCard>
                        <HoverCardTrigger className={cn(
                          "text-sm cursor-pointer",
                          styles.iconTextClass,
                          "underline underline-offset-2"
                        )}>
                          Lihat karakteristik lainnya...
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <h5 className="font-medium mb-2">Karakteristik Lainnya</h5>
                          <ul className="space-y-2">
                            {styleInfo.traits.slice(3).map((trait, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className={cn("text-sm", styles.iconTextClass)}>●</span>
                                <span className="text-sm">{trait}</span>
                              </li>
                            ))}
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-1">
                    <span className={cn("text-sm", styles.iconTextClass)}>●</span>
                    Rekomendasi Belajar
                  </h4>
                  <ul className="space-y-3">
                    {styleInfo.strategies.slice(0, 3).map((strategy, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={cn(
                          "h-5 w-5 rounded-full flex items-center justify-center mt-0.5",
                          styles.iconBgClass
                        )}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-tight">{strategy}</span>
                      </li>
                    ))}
                    <li>
                      <HoverCard>
                        <HoverCardTrigger className={cn(
                          "text-sm cursor-pointer",
                          styles.iconTextClass,
                          "underline underline-offset-2"
                        )}>
                          Lihat rekomendasi lainnya...
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <h5 className="font-medium mb-2">Rekomendasi Lainnya</h5>
                          <ul className="space-y-2">
                            {styleInfo.strategies.slice(3).map((strategy, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className={cn("text-sm", styles.iconTextClass)}>●</span>
                                <span className="text-sm">{strategy}</span>
                              </li>
                            ))}
                          </ul>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          
          {!isDominant && (
            <p className="text-base">{styleInfo.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningStyleCard;
