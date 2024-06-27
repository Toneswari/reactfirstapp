import { useState } from "react";

export default function Form(){
    const[name,setName]=useState({firstName:"",lastName:""});
    // function handleChange(e){
    //     // console.log("change occured");
    //     setName(e.target.value);
    // }
    function handleSubmit(e){
        // console.log("submitted");
        console.log(name.firstName);
        console.log(name.lastName);
        e.preventDefault();
    }
    return(
<div>
    <h1>To do form</h1>
    {name.firstName}-{name.lastName}
    <form>
        {/* <input onChange={function handleChange(e){
            setName(e.target.value);
            // console.log("change occured");
        }} type="text" value={name}></input> */}
        
        <input onChange={(e)=>setName({...name,firstName:e.target.value})}
        type="text" value={name.firstName}></input>
        <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})}/>
        <button onClick={(e)=>handleSubmit(e)}>Add</button>
    </form>
</div>
    );
}