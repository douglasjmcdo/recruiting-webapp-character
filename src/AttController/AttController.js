import { useEffect, useState } from "react";

const AttController = ({name, val, setVal, index}) => {
    const [modifier, setModifier] = useState(0);
    
    function increment() {
        setVal(index, val + 1);
    }

    function decrement() {
        setVal(index, val - 1);
    }

    //recalculate modifier on value change
    useEffect(() => {
        setModifier(Math.floor((val - 10) / 2));
    }, [val])

    return (
        <div className="attcontroller">
          {name} :
          <button onClick={decrement}>-</button>
          {val}
          <button onClick={increment}>+</button>

          <div>MOD {modifier}</div>
        </div>
    )
}

export default AttController;