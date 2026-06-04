import React from "react";
import TicketBook from "./Components/TicketBook";
import "./App.css";  
import ApiCallOne from "./Components/ApiCallOne";
import ExampleTwo from "./Components/ExampleTwo";
import { useState } from "react";
import Form from "./Components/Form";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Netflix from "./Components/Netflix";
import { BrowserRouter,Link,Routes,Route } from "react-router-dom";
import GroccercyList from "./Components/GroccercyList";



function App() {

    const[islog, setislog]= useState(true)
    const handlelog=()=>{
      setislog(false) 

    }
  return(

    <BrowserRouter>
      <div>
        {/* <h1>Today</h1> */}
      

        {/* <Netflix /> */}
        {/* <TicketBook /> */}



        <GroccercyList/>
        {/* {islog ? <ApiCallOne /> :null} */}

        {/* <button onClick={handlelog} > Logout </button> */}

        {/* <ExampleTwo/> */}

        {/* <Link to="/" >Home</Link>
        <Link to="/Product">Product</Link>
        <Link to="/Concat">About</Link> */}

      {/* <Routes> 
        <Route path="/" element={<Home/>}/>

        <Route path="/Product" element={<Product/>}/>
       
        <Route path="/Concat" element={<About/>}/>

           
        
      </Routes> */}

        {/* <Form/> */}
      </div>

    </BrowserRouter>
  )
}


export default App


// use effect  mounting unmounting upadteing
// from
// react router 


// theread opertaion 