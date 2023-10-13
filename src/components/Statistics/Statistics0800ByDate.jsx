import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

export function Statistics0800ByDate({ selectedYear }) {
  const generateDataByYear = (year) => {
    return {
      labels,
      datasets: [
        {
          label: `Casos atendidos - ${year}`,
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
        text: 'Casos atendidos por fechas',
      },
    },
  };

  const [chartData, setChartData] = useState(generateDataByYear(selectedYear));

  useEffect(() => {
    setChartData(generateDataByYear(selectedYear));
  }, [selectedYear]);

  return <Bar options={{ ...options, maintainAspectRatio: false, aspectRatio: 1.0 }} data={chartData} />;
}


