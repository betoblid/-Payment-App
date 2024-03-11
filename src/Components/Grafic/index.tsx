import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    chart: {
        height: 350,
        type: 'line',
        zoom: { enabled: true } //se o grafico vai ter zoom
    },
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const, 
    },
    title: {
      display: true,
    },
  },
};

const labels = ['MON', 'TUE', 'WED', 'THU','FRI','SAT','SUN'];
const datas = [91,12,23,95,56,66,87,87]

export const data = {
  labels,
  datasets: [
    {
        label: '',
      data: datas.map((faker) => faker),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '',
      data: datas.map((faker) => faker),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Grafic() {
  return <Bar options={options} data={data}  />;
}
