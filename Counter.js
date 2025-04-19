import { useState } from "react";

function Counter() {
  const [count, countButton] = useState(0);
  const counter = () => {
    countButton(prevCount=> prevCount + 1);
  };
  return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={counter}> +1 </button>
    </div>
  );
}

export default Counter;
