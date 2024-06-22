import React, { useState } from "react";

function MyCOunter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    counter <= 0 ? setCounter(counter) : setCounter(counter - 1);
  };

  return (
    <div className="mt-12">
      <span>counter {counter}</span>
      <button className="text-2xl text-red-500" onClick={increment}>
        add
      </button>
      <button className="text-2xl text-red-500" onClick={decrement}>
        sub
      </button>
    </div>
  );
}

export default MyCOunter;
