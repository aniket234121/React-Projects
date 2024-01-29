import { useState } from "react"

const Counter = () => {

    const [count,setCount]=useState(0);

    const increment=()=>{setCount(count+1)}
    const decrement=()=>{setCount(count-1)}
    const reset=()=>{setCount(0)}

    return (
        <><div className="counter">
            <h1>Counter App</h1>
            <p>{count}</p>
            <div className="btns">
                <button className="btn" onClick={increment}>+</button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={decrement}>-</button>
            </div>
        </div>
        </>
    )
}
export default Counter