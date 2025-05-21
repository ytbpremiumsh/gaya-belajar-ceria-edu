
import React from 'react';
import { QuizResult } from '@/types';
import { Eye, Headphones, Move } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ResultChartProps {
  result: QuizResult;
}

const ResultChart: React.FC<ResultChartProps> = ({ result }) => {
  const data = [
    {
      name: 'Visual',
      value: result.percentage.visual,
      color: '#A7C7E7',
      icon: 'eye'
    },
    {
      name: 'Auditory',
      value: result.percentage.auditory,
      color: '#E6E6FA',
      icon: 'headphones'
    },
    {
      name: 'Kinesthetic',
      value: result.percentage.kinesthetic,
      color: '#FFD8BE',
      icon: 'move'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'eye': return <Eye className="h-3.5 w-3.5" />;
      case 'headphones': return <Headphones className="h-3.5 w-3.5" />;
      case 'move': return <Move className="h-3.5 w-3.5" />;
      default: return null;
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-3">Distribusi Gaya Belajar</h3>
      <div className="bg-white/50 p-3 rounded-xl shadow-sm backdrop-blur-sm">
        <div className="space-y-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="flex items-center justify-center p-1 rounded-full" style={{ backgroundColor: `${item.color}50` }}>
                {getIcon(item.icon)}
              </div>
              <div className="min-w-[60px] text-xs font-medium">{item.name}</div>
              <div className="flex-1">
                <Progress 
                  className="h-2" 
                  value={item.value} 
                  style={{
                    backgroundColor: `${item.color}30`,
                    ['--tw-bg-opacity' as any]: '0.3'
                  }}
                >
                  <div className="h-full bg-opacity-70" style={{ backgroundColor: item.color }}></div>
                </Progress>
              </div>
              <div className="min-w-[30px] text-right text-xs font-semibold">{item.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultChart;
