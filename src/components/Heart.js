import React, { useTransition } from "react"
import { useState } from "react"
import { Animated } from "react-animated-css"

function Heart() {
    
    const [className, classNameSwitcher] = useState("heart")
    const onclick = () => {
        switchHearts ();
    }

    const switchHearts =()=>{
        if(className == "heart")
            classNameSwitcher("heart-red")
        else 
            classNameSwitcher("heart")
    }
    return(
        <div className={className + " alignment-right"} onClick={onclick}>

        </div>
    )
}

export default Heart