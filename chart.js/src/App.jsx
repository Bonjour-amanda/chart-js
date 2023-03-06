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
          "blue",
          "grey",
          "green",
          "yellow",
          "cyan",
        ],
        borderColor: "black",
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
