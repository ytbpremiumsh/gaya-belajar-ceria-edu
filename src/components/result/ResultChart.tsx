
import React from 'react';
import { 
  ChartContainer, 
  ChartLegendContent,
  ChartTooltip,
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
  Cell
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

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'eye':
        return <Eye className="h-4 w-4 mr-1" />;
      case 'headphones':
        return <Headphones className="h-4 w-4 mr-1" />;
      case 'move':
        return <Move className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };
  
  const CustomizedLabel = ({ x, y, width, value, icon }: any) => {
    return (
      <g transform={`translate(${x + width / 2}, ${y - 10})`}>
        <text x={0} y={0} dy={-5} textAnchor="middle" fill="#666" fontSize={12} fontWeight="500">
          {`${value}%`}
        </text>
      </g>
    );
  };

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
      <ChartContainer config={config}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#666' }}
          />
          <YAxis 
            domain={[0, 100]} 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#666' }}
            width={30}
          />
          <Tooltip 
            content={<ChartTooltipContent />}
            cursor={{ fill: 'rgba(0,0,0,0.05)' }}
          />
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]}
            barSize={40}
            label={<CustomizedLabel />}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))' }}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default ResultChart;
