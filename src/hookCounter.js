import React, { useState,useEffect } from "react";

function HookCounter() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title=`you clicked ${count}`

    })

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count:{count}
            <button onClick={() => setCount(count + 1)}>Count{count}</button>
            <button onClick={incrementFive}>icrease by 5</button>
        </div>
    )
}
export default HookCounter;