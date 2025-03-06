{/*Week 2 Task 2:
Manage State with useState (5 Points)
Create a Counter component.
Use the useState hook to track a count value.
Display the count and a button to increase the count when clicked.
Example Output:

Count: 0  
[Click Me]  
(Clicking the button increases the count)

export default App;
*/}

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
