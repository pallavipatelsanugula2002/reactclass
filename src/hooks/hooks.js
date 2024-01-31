import { useState, useEffect } from "react";

const UseStatemethod = () => {
  let [currentvalue, update] = useState(0);
  let [currenttimer, timerUpdate] = useState(100);
  let intervalId; // Declare intervalId in the outer scope

  const handler = () => {
    update(currentvalue + 1);
  };

  const handler1 = () => {
    intervalId = setInterval(() => {
      timerUpdate((currentTimer) => currentTimer - 1);
      
      // Clear the interval when currenttimer is less than 90
      if (currenttimer < 90) {
        clearInterval(intervalId);
      }
    }, 1000);
  };

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h2>{currentvalue}</h2>
      <h2 style={{ color: currenttimer > 50 ? "red" : "black" }}>{currenttimer}</h2>
      <button onClick={handler}>click</button>
      <button onClick={handler1}>clickme</button>
    </>
  );
};

export default UseStatemethod;
