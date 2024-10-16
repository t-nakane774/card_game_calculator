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

ChartJS.register(LinearScale, CategoryScale, LineElement, PointElement, Title, Tooltip, Legend, Filler);


interface ChartProps {
  deckSize: number;
  cardSize: number;
}

export const LineChart: React.FC<ChartProps> = ({ deckSize, cardSize }) => {
  const cards: number[] = [...Array(deckSize)].map((_, index) => index + 1);

  let previousValue: number = 0;
  const drowProbabilities: number[] = cards.map((cardNum) => {
    const num = deckSize - cardNum + 1;
    const result = 1 - (1 - previousValue) * (num - cardSize) / num;
    previousValue = result;
    return result < 0 ? 0 : result;
  });

  // データの定義
  const data = {
    labels: cards,
    datasets: [
      {
        label: 'My First dataset',
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        data: drowProbabilities,
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
        text: 'Line Chart Example',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};