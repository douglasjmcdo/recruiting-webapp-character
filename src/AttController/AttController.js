import { useState } from "react";
const AttController = ({name, val, setVal, index}) => {
    
    function increment() {
        setVal(index, val + 1);
    }

    function decrement() {
        setVal(index, val - 1);
    }

    return (
        <div className="attcontroller">
          {name} :
          <button onClick={increment}>+</button>
          {val}
          <button onClick={decrement}>-</button>
        </div>
    )
}

export default AttController;