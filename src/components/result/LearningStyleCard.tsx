import React from 'react';
import { Eye, Headphones, Move } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LearningStyle, LearningStyleInfo } from '@/types';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
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
        return <Eye className="h-6 w-6" />;
      case 'auditory':
        return <Headphones className="h-6 w-6" />;
      case 'kinesthetic':
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
  return <Card className={cn("overflow-hidden border-2 shadow-lg transition-all hover:shadow-xl", styles.gradientClass, styles.borderClass, isDominant && "transform scale-[1.02]")}>
      <CardContent className="p-6 py-[24px]">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner", styles.iconBgClass)}>
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-lg", "bg-white")}>
                {getIcon()}
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">{styleInfo.title}</h3>
              <span className="text-lg font-bold">{percentage}%</span>
            </div>
            
            <div className="mb-4">
              <Progress className={cn("h-3", styles.progressColor.replace('bg-', 'bg-opacity-70 ') + ' [&>div]:' + styles.progressColor)} value={percentage} />
            </div>
            
            {isDominant && <>
                <p className="mb-6 text-base leading-relaxed">{styleInfo.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/60 p-4 rounded-xl shadow-sm py-[16px]">
                    <h4 className={cn("font-semibold mb-4 pb-2 border-b-2", styles.borderClass)}>
                      Karakteristik
                    </h4>
                    <ul className="space-y-3">
                      {styleInfo.traits.slice(0, 4).map((trait, index) => <li key={index} className="flex items-start gap-2 text-sm">
                          <span className={cn("text-sm mt-1", styles.iconTextClass)}>●</span>
                          <span>{trait}</span>
                        </li>)}
                      {styleInfo.traits.length > 4}
                    </ul>
                  </div>
                  
                  <div className="bg-white/60 p-4 rounded-xl shadow-sm">
                    <h4 className={cn("font-semibold mb-4 pb-2 border-b-2", styles.borderClass)}>
                      Rekomendasi Belajar
                    </h4>
                    <ul className="space-y-3">
                      {styleInfo.strategies.slice(0, 4).map((strategy, index) => <li key={index} className="flex items-start gap-2 text-sm">
                          <span className={cn("text-sm mt-1", styles.iconTextClass)}>●</span>
                          <span>{strategy}</span>
                        </li>)}
                      {styleInfo.strategies.length > 4 && <li>
                          <HoverCard>
                            
                            <HoverCardContent className="w-80">
                              <h5 className="font-medium mb-2">Rekomendasi Lainnya</h5>
                              <ul className="space-y-2">
                                {styleInfo.strategies.slice(4).map((strategy, index) => <li key={index} className="flex items-start gap-2">
                                    <span className={cn("text-sm mt-1", styles.iconTextClass)}>●</span>
                                    <span className="text-sm">{strategy}</span>
                                  </li>)}
                              </ul>
                            </HoverCardContent>
                          </HoverCard>
                        </li>}
                    </ul>
                  </div>
                </div>
              </>}
            
            {!isDominant && <p className="text-base">{styleInfo.description}</p>}
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default LearningStyleCard;