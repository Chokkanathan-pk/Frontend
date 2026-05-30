import React, { useState, useEffect } from "react";


function ApiCallOne(){
    const [data, setdata]=useState([])
    const [count ,setcount]=useState(0)


    const handlefecth =async () => {
        let res = await fetch("https://fakestoreapi.com/products")
        let fullres= await res.json()
        setdata(fullres)
        console.log("luffy");
        
       
    }
    // ulla vaara mothu print varnum naa useeffect kulla poda num 
    // useeffect kulla handlefetch podanum idhu mounting stage 
    // veliya poga mothu print vara num naa useeffect kulaa return podanum  
    // unmoundint stage  

    useEffect(() => {
        // handlefecth ()
        console.log("hey luffy");

        return () =>{
        console.log("hey arun ")
        }
    },[count])


    const handeladd =()=>{
        setcount(count+1)
    }
//  upadting stage apo mounting and unmounting ku call akum 
    return(
        <div>
            <h1>{count}</h1>
            {/* <button onClick={handlefecth}>call Api</button> */}
             <button  onClick={handeladd}  >add</button>
            <div className='prowarp'>
              {data.map((da,i)=>(
                <div className="cardpro">
                    <img src= {da.image} height={200} width={200} />
                    <h1> {da.title} </h1>
                    <h3> price: {da.price} </h3>

                    
                </div>
                ))}
            </div>
        </div>
    )
}

export default ApiCallOne;