import React, { useEffect, useState } from "react";
import "./Digitallclock.css"




const DigitalClock = () => {
    const [clockState, setClockState] = useState();
  
    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        //la constante date recoge la info de la hora local
        setClockState(date.toLocaleTimeString());
      }, 4000);
    }, []);
    return (
      <div className="digital-clock">
        <h2>{clockState}</h2>
        {/* el valor reocogido de date.toLocaleTimeString es el que se aplica a clockState */}
      </div>
    );

  };
  
  export default DigitalClock;