import { useState, useEffect } from "react";
import './Class.css';

const Class = ({classname, classtributes, attributes}) => {
    const [eligible, setEligible] = useState(false);
    const [hidden, setHidden] = useState(true);


    // when attributes update, check all class attributes to determine eligibility
    useEffect(() => {
        let iseligible = true;

        Object.keys(classtributes).map((c, i) => {
            if (attributes[i] < classtributes[c]) {
                iseligible = false;
                // note: i'd like to optimize by breaking out of this in advance but map doesnt allow for that
            }
        });

        if (iseligible != eligible) {
            setEligible(iseligible);
        }
    }, [attributes]);

    function toggleDisplay() {
        setHidden(!hidden);
    }


    return (
        <div className="classinfo">
            <button className={(eligible ? 'eligible' : '')}
                onClick={toggleDisplay}>
                {classname}
            </button>
            <ul className={"classtributes " + (hidden ? 'hidden' : '')}>
                {Object.keys(classtributes).map((c, i) => (
                        <li>
                            {c} : {classtributes[c]}
                        </li>
                ))}
            </ul>
        </div>
        
    )
}

export default Class;