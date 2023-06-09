import React, { useState,useEffect } from "react";

function MouseTrack(){
    const [x,setx]= useState(0);
    const [y,sety]= useState(0);
const logmousePos= e =>{
    setx(e.clientX)
    sety(e.clientY)
}

    useEffect(()=>{
        window.addEventListener('mousemove',logmousePos)
    },[])
    return (
        <div>
            Hooks X-{x} y-{y}
        </div>
    )

}
export default MouseTrack;
