import { useState } from "react";
import AttController from "../AttController/AttController";
import { ATTRIBUTE_LIST } from "../consts";
const Sheet = () => {
    const [num, setNum] = useState(0);
    const [attributes, setAttributes] = useState([0, 0, 0, 0, 0, 0]);

    //pass in index to update and new val to set it to
    function setAttributeX(index, newval) {
        let newarr = attributes.map((val, i) => {
            if (i === index) {
                return newval;
            } else {
                return val
            }
        });
        setAttributes(newarr);
    }

    return (
        <div className="sheet">
          Sheet Value:
          
          Attributes:
            <div className="attributes">
                {attributes.map((att, i) => (
                    <AttController 
                    key={i}
                    name={ ATTRIBUTE_LIST[i] }
                    val={att}
                    setVal={setAttributeX}
                    index={i} 
                    />
                ))}
            </div>

            <div className="classes">
                {CLASS_LIST.map(() => (
                    <div></div>
                ))}
            </div>
          
          
        </div>
    )
}

export default Sheet;