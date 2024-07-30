import { useState, useEffect } from "react";
import './Class.css';

const Class = ({classname, classtributes, attributes}) => {
    const [eligible, setEligible] = useState(false);


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


    return (
        <div className={"classname " + (eligible ? 'eligible' : '')}>
            {classname}
        </div>
    )
}

export default Class;