import { useState } from 'react'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import { dummyData } from './dummyData';

function App() {
  // const [count, setCount] = useState(0)

  const [userData, setUserData] = useState({
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
      },
    ],
  });

  return (
    <div >
      <div style={{ width: 700 }}>
        <BarChart chartData={userData}/>
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData}/>
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData}/>
      </div>
    </div>

  )
}

export default App
