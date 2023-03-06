import React, { useRef } from 'react';
import Chart from 'chart.js/auto'
import { Bar, getElementsAtEvent } from 'react-chartjs-2';

const BarChart = ({chartData})  => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js | Bar Chart',
          },
        },
        scales: {
            x : {
                title: {
                    display: true,
                    text: 'Year Occurred',
                    color: 'red'
                }
            },
            y : {
                title: {
                    display: true,
                    text: 'Number of Users',
                    color: 'red'
                }
            }
        }
      };

    const chartRef = useRef();

    const onclickChart = (e) => {
        if(getElementsAtEvent(chartRef.current, e).length > 0) {
            const dataSetIndex =  getElementsAtEvent(chartRef.current, e)[0].datasetIndex;
            const index = getElementsAtEvent(chartRef.current, e)[0].index;

            const link = chartData.datasets[dataSetIndex].link[index];
            window.open(link, '_blank')
        }
    }


  return (
    <Bar 
        data={chartData}
        options={options} 
        onClick={onclickChart}
        ref={chartRef}
    />
  );
};

export default BarChart;
