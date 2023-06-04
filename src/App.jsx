import './App.css'
import DigitalClock from '../components/DigitalClock/DigitalClock'
import Countdown from '../components/Countdown/Countdown';
import Stopwatch  from '../components/StopWatch/StopWatch';

import React from 'react'


//funcion para mostrarlos en pantalla
function App () {
  return (
    <div className="clockContent"> 
    <div>
    <DigitalClock />
    </div>
    <div>
      <Countdown/> 
      </div>
      <div>
      <Stopwatch/>
      </div>
    </div>
   
  );
}

export default App;

