import React, {useState} from "react";
import HomeComp from "./HomeComp";

function TicketBook() {
    const [count,setcount]=useState(1)

    const handleadd = () =>{
        if(count==10){
            setcount(0)
        } else {
            setcount(count + 1)
        }
    }
  return (
    <div>
        
      <h1 className="luf">Count-{count}</h1>
      <button onClick={handleadd}>Add</button>



        <HomeComp />
    
   
    
    </div>
  );
}

export default TicketBook;