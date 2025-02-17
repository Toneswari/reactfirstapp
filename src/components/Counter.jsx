import { useState } from "react";

export default function Counter(){
    const[count,setCount]=useState(0);
    const[incrementBy,setIncrementBy]=useState(1);
    function increaseCount(){
        setCount(count+incrementBy);
    }
    function decreaseCount(){
        setCount(count-incrementBy);
    }
    function increaseIncrement(){
        setIncrementBy(incrementBy+1);
    }
    function decreaseIncrement(){
        setIncrementBy(incrementBy-1);
    }
    return(
<div>
    <h1>Count value is {count}</h1>
    <button onClick={increaseCount}>increase count</button>
    <br/>
    <br/>
    <button onClick={decreaseCount}>decrease count</button>
    <h1>We are incrementing the value by:{incrementBy}</h1>
    <button onClick={increaseIncrement}>Increase increment</button>
    <button onClick={decreaseIncrement}>Decrease decrement</button>
</div>
    );
}