import { useState } from 'react'
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
import { dummyData } from './dummyData';

function App() {

  const  userData = {
    labels: dummyData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: dummyData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "grey",
        borderWidth: 2,
        link: [
          'https://www.chartjs.org/',
          'https://react-chartjs-2.js.org/',
          'https://www.chartjs.org/',
          'https://react-chartjs-2.js.org/',
          'https://www.chartjs.org/',
        ]
      },
    ],
  };

  return (
    <div>
      <div style={{ width: 500 }}>
        <BarChart chartData={userData}/>
      </div>
      <div style={{ width: 500 }}>
        <LineChart chartData={userData}/>
      </div>
      <div style={{ width: 500 }}>
        <PieChart chartData={userData}/>
      </div>
      <div style={{ width: 500 }}>
        <DoughnutChart chartData={userData}/>
      </div>
      <div style={{ width: 500 }}>
        <RadarChart chartData={userData}/>
      </div>
    </div>

  )
}

export default App
