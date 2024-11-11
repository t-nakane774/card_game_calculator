import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,  // CategoryScaleのインポートを追加
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { RangeSlider } from './RangeSlider';
import { useState } from 'react';

ChartJS.register(LinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, Legend, Filler);


interface ChartProps {
  deckSize: number;
  cardSize: number;
}

export const LineChart: React.FC<ChartProps> = ({ deckSize, cardSize }) => {
  const cards: number[] = [...Array(deckSize)].map((_, index) => index + 1);
  const [range, setRange] = useState<number[]>([1, deckSize]);

  const handleRangeChange = (newRange: number[]) => {
    setRange(newRange);
  }

  let previousValue: number = 0;
  const drowProbabilities: number[] = cards.map((cardNum) => {
    const num = deckSize - cardNum + 1;
    const result = 1 - (1 - previousValue) * (num - cardSize) / num;
    previousValue = result;
    return result < 0 ? 0 : result * 100;
  });

  // データの定義
  const data = {
    labels: cards.slice((range[0] - 1), range[1]),
    datasets: [
      {
        label: 'Probability',
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        data: drowProbabilities.slice((range[0] - 1), range[1]),
      },
    ],
  };

  // オプションの定義
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'probability',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'Probability',
        },
        ticks: {
          stepSize: 20,
          callback: (value: string | number) => {
            return value + ' %';
          },
        },
        grid: {
          color: 'rgba(255, 99, 132, 0.2)',
        },
      },
      x: {
        beginAtZero: true,
        min: range[0],
        max: deckSize,
        title: {
          display: true,
          text: 'drow count',
        },
      }
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
      <div className='mx-auto w-2/3'>
        <RangeSlider onRangeChange={handleRangeChange} rangeMax={deckSize}></RangeSlider>
      </div>
    </div>
  );
};