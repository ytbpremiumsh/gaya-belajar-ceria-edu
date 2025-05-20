
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
    <div className="w-full h-64">
      <h3 className="text-xl font-semibold mb-4">Distribusi Gaya Belajar</h3>
      <ChartContainer config={config}>
        <BarChart 
          data={data} 
          layout="vertical"
          margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
        >
          <XAxis 
            type="number"
            domain={[0, 100]}
            tickCount={5}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#666' }}
          />
          <YAxis 
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: '#666', fontWeight: 500 }}
            width={80}
          />
          <Tooltip 
            content={<ChartTooltipContent />}
            cursor={{ fill: 'rgba(0,0,0,0.05)' }}
          />
          <Bar 
            dataKey="value" 
            radius={[0, 4, 4, 0]}
            barSize={30}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))' }}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            ))}
            <LabelList 
              dataKey="value" 
              position="right" 
              formatter={(value: number) => `${value}%`}
              style={{ fontWeight: 'bold', fill: '#333' }}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default ResultChart;
