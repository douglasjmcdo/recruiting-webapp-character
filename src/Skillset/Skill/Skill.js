import { useEffect, useState } from "react";
import "./skill.css";

const Skill = ({mod, skill}) => {
    

    const [value, setValue] = useState(0);
    const [alloc, setAlloc] = useState(0);

    function decrement() {
        let newval = alloc - 1;
        if (newval < 0) {
            newval = 0;
        }
        setAlloc(newval);
        return;
    }

    function increment() {
        let newval = alloc + 1;
        //TODO: add a check to ensure we dont surpass max
        setAlloc(newval);
        return;
    }

    //update value based on modifier and allocatedpoints
    useEffect(() => {
        setValue(mod + alloc);
    },  [mod, alloc]);



    return (
        <div className="skill">
            {skill.name}
            <div>{skill.attributeModifier} : {mod}</div>

            <div className="controls">
                <button onClick={decrement}>-</button>
                {value}
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Skill;