import Navbar from "./components/Navbar";
import {Routes, Route, useNavigate} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Card from "./components/Card";
import { useState } from "react";

function App() {

  const [title,setTitle]= useState("")

  const navigate =useNavigate();

  function onClickHandler(data){
    console.log(data);
    
    setTitle(data)
    navigate("products/product")
  }


  return (
    <>
      <div className="w-[70%] mx-auto" >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/products" element={<Products clickHandler={onClickHandler} />} >
            <Route path="product" element={<Card title={title} />} />
          </Route>

          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

      </div>
    </>
  );
}

export default App;
