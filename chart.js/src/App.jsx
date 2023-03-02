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
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
    <BarChart chartData={userData}/>
    <LineChart chartData={userData}/>
    <PieChart chartData={userData}/>
    </>

  )
}

export default App
