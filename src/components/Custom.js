import React, { useState } from "react"


export default function Custom(){
    

    const [click, onClick] = useState(0);
    
    return(
        <button class="button" style={{margin:10}}onClick={()=>{onClick(click+1)}}>{click}</button>
    )
}