import { useEffect, useState } from "react";

const AttController = ({name, val, setVal, mod, setMod, index}) => {
   
    function increment() {
        setVal(index, val + 1);
    }

    function decrement() {
        setVal(index, val - 1);
    }

    //recalculate modifier on value change
    useEffect(() => {
        let newmod = Math.floor((val - 10) / 2);
        if (newmod != mod) {
            setMod(index, newmod);
        }
    }, [val])

    return (
        <div className="attcontroller">
          {name} :
          <button onClick={decrement}>-</button>
          {val}
          <button onClick={increment}>+</button>

          <div>MOD {mod}</div>
        </div>
    )
}

export default AttController;