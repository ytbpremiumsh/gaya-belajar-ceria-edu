
import React from 'react';
import { 
  ChartContainer, 
  ChartLegendContent,
  ChartTooltipContent
} from '@/components/ui/chart';
import { QuizResult } from '@/types';
import { Eye, Headphones, Move } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
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

  const config = {
    visual: {
      label: 'Visual',
      color: '#A7C7E7',
      icon: () => <Eye className="h-4 w-4" />
    },
    auditory: {
      label: 'Auditory',
      color: '#E6E6FA',
      icon: () => <Headphones className="h-4 w-4" />
    },
    kinesthetic: {
      label: 'Kinesthetic',
      color: '#FFD8BE',
      icon: () => <Move className="h-4 w-4" />
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-4">Distribusi Gaya Belajar</h3>
      <div className="bg-white/50 p-4 rounded-xl shadow-sm backdrop-blur-sm">
        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className="min-w-[80px] text-sm font-medium">{item.name}</div>
              <div className="flex-1">
                <Progress 
                  className="h-2.5" 
                  value={item.value} 
                  style={{
                    backgroundColor: `${item.color}30`,
                    ['--tw-bg-opacity' as any]: '0.3'
                  }}
                >
                  <div className="h-full bg-opacity-70" style={{ backgroundColor: item.color }}></div>
                </Progress>
              </div>
              <div className="min-w-[36px] text-right font-semibold">{item.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultChart;
