import React, { useState } from 'react';

function Counter() {
 const [count, setCount] = useState(0);

  const increment = () => {
   setCount(count + 1);
    };
     const decrement = () => {
      setCount(count - 1);
       };

        return (
         <div id="counterContainer">
          <h1>Counter</h1>
           <p>Current Count: <strong>{count}</strong></p>
            <button id="incrementButton" onClick={increment}>
             Increment
              </button>
               <button id="decrementButton" onClick={decrement}>
                Decrement
                 </button>
                  </div>
                   );
                   }

                   export default Counter;
