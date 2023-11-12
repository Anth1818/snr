import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { STATESBYSTATS as labels } from '../../utils/constants';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function Statistics0800ByStates({ selectedYearState }) {
  
  const generateDataByYear = (year) => {
    return {
      labels,
      datasets: [
        {
          label: `Casos atendidos - ${year}`,
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Casos atendidos por estados',
      },
    },
  };

  const [chartData, setChartData] = useState(generateDataByYear(selectedYearState));

  useEffect(() => {
    setChartData(generateDataByYear(selectedYearState));
  }, [selectedYearState]);

  return <Bar options={{ ...options, maintainAspectRatio: false, aspectRatio: 1.0 }} data={chartData} />;
}