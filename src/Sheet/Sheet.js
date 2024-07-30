import { useState } from "react";
import AttController from "../AttController/AttController";
import { ATTRIBUTE_LIST, CLASS_LIST } from "../consts";
import './Sheet.css'
import Class from "../Class/Class";

const Sheet = () => {
    const [num, setNum] = useState(0);
    const [attributes, setAttributes] = useState([10, 10, 10, 10, 10, 10]);
    //let CLASS_ARR = JSON.stringify(CLASS_LIST);

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

            <div className="attributes">
            Attributes:
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
                {Object.keys(CLASS_LIST).map((c, i) => (
                    <Class key={i}
                    classname={c}
                    classtributes={CLASS_LIST[c]}
                    attributes={attributes}
                    />
                ))}
            </div>
          
          
        </div>
    )
}

export default Sheet;