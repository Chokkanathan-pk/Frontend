import React from 'react'
import { useState } from 'react';

export default function Form(){

    const[name,setname]=useState("");


    const handlename =(e)=>{

        console.log(e.target.value); 
        setname(e.target.value)

    }


    // const[age,setage]=useState()
    return(
        <div>

            <h1> Student form</h1>

            <lable>Name</lable>
            <input onChange={handlename}placeholder='enter'/>
            <br/>

            <label>Age</label>
            <input placeholder="entrt"/>


            
            <h1>{name}</h1>
               

        </div>
    )
}


// react hook form 



// package

//  react   