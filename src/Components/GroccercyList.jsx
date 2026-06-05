import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function GroccercyList() {

    const [data , setDatas] = useState([])
    const[input , setInput] = useState()

    useEffect(()=>{
        handelfetch()
    },[])




    const handelfetch = async()=>{
        // let res= fetch("http://localhost:3000/todoList" ,{method:"post"})

        let res = await axios.get("http://localhost:3000/todoList")

        setDatas(res.data);
    }


    const handleinput = (e)=>{
        setInput(e.target.value)
    }

    const handlepost = async()=>{
        let body={
            list:input
        }
        let apisend = await axios.post("http://localhost:3000/todoList" , body)

     handelfetch()    
    };

    const handledelete = (id)=>{
       console.log(id)
    }

    return(
        <div>
            <h1>Groccercy List</h1>
            <input onChange={handleinput} placeholder='Enter'></input>
            <button onClick={handlepost}>Sumbit</button>
            

            {data.map((da,i)=>(
                <div key={da.id}>

                    <h2>{i=i+1} {da.list}</h2>
                    <button onClick={()=>handledelete(da.id)}>Delete</button>
                    <button>Edit</button>

                </div>

            ))}
            
            
            
            
            {/* <ol>
                <li>Apple</li>
                <button>Delete</button>
                <button>Edit</button>
            </ol> */}
        </div>
    )
}