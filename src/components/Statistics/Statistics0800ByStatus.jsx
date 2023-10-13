import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';  // Importa faker para generar datos aleatorios

ChartJS.register(ArcElement, Tooltip, Legend);

const initialData = {
  labels: ['No contactado', 'Atendido', 'Seguimiento'],
  datasets: [
    {
      label: 'Número de casos',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Casos atendidos por Estatus',
    },
  },
};

export function Statistics0800ByStatus(seletedYear) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // Genera nuevos datos aleatorios cada vez que el componente se re-renderiza
    const newData = {
      ...initialData,
      datasets: [
        {
          ...initialData.datasets[0],
          data: initialData.labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        },
      ],
    };

    setData(newData);
  }, [seletedYear]);

  return <Doughnut options={options} data={data} />;
}
