import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
//DEFAULTS
// ChartJS.defaults.font.size = 1;
// ChartJS.defaults.backgroundColor = '#a73e7b';
interface Props {
  title: string,
  labelRow: string[],
  labels1title: string,
  labels2title: string,
  dat1: number[],
  dat2: number[],
}


const LineGraphic = ({
  title,
  labelRow,
  labels1title,
  labels2title,
  dat1,
  dat2
}: Props) => {



  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
        color: "#07130c",
        font: {
          size: 16
        }
      },
    },

  };
  // [4, 5, 6, 3, 5, 2, 3, 2, 3, 4, 1, 2]
  const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const data = {
    labels,
    datasets: [
      {
        label: labels1title,
        data: dat1,
        borderColor: '#235d3b',
        backgroundColor: '#3ea76a',
        tension: 0.3,
        fill:true,
      },
      {
        label: labels2title,
        data: dat2,
        borderColor: '#a73e7b',
        backgroundColor: '#5d2344',
        tension: 0.3,
        fill:true,
      },
      
    ],
  };


  return (
    <div className='w-full h-96 p-4 bg-pwgreen-50 rounded-xl shadow-2xl'>
      <Line options={options} data={data} />
    </div>

  )
}


export default LineGraphic
