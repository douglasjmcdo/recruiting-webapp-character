import { useEffect, useState } from "react";
import { SKILL_LIST } from "../consts";
import { ATTRIBUTE_LIST } from "../consts";
import Skill from "./Skill/Skill";

const Skillset = ({mods}) => {

    const [skillpoint, setSkillpoint] = useState(10);
    //recalculate skillpoints on intmod change
    useEffect(() => {
        let newsp = (10 + (4*mods[3]));
        if (newsp < 0) { newsp = 0};
        setSkillpoint(newsp);        
    }, [mods[3]])

    function findmod(attrname) {
        for (let i = 0; i < ATTRIBUTE_LIST.length; i++) {
            if (attrname === ATTRIBUTE_LIST[i]) {
                return mods[i];
            }
        }
    }

    return (
        <div className="skillsetlist">
            POINTS: {skillpoint}

            {Object.keys(SKILL_LIST).map((c, i) => (
                
                <Skill className="skill"
                mod={findmod(SKILL_LIST[c].attributeModifier)}
                skill={SKILL_LIST[c]}>
                </Skill>
                
            ))}
        </div>
    )
}

export default Skillset;