import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import SideCart from './Components/SIdeCart/SideCart';

function App() {
  const [watchTime,setWatchTime] = useState('');
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      console.log(sum);
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum)
     
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time)
     
    }
  };

  return (
    <div className="App">
     <div className="main row">
      <div className="home-container col-md-8">
        <Home handleWatchTime={handleWatchTime} ></Home>
      </div>
      <div className="sideCart col-md-4 card">
        <SideCart watchTime={watchTime} ></SideCart>
      </div>
     </div>
    </div>
  )
}

export default App
