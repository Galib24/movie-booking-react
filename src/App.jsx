import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import SideCart from './Components/SIdeCart/SideCart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div className="main row">
      <div className="home-container col-md-8">
        <Home/>
      </div>
      <div className="sideCart col-md-4 card">
        <SideCart/>
      </div>
     </div>
    </div>
  )
}

export default App
