import { useState } from "react";
import React from "react";
import './../styles/App.css';


const App = () => {

       const [Count,setCount]=useState(0);
       const handleClick =()=>
       {
        setCount(Count + 1);
       }


  return (
    <div>
     <p>Button clicked {Count} times </p>
     <button onClick={handleClick}>Click me</button>
    </div>
  )
}

/*
   git add .
   git commit -m "added"
   git push

  ctrl-J for closing the terminal opening also
*/
export default App ;
