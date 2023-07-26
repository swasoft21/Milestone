import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Menu from "./components/menu";
import Aboutus from "./components/aboutus";

import Login from "./components/login";
import Register from "./components/register";


import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.bundle";
// import "./components/style.css";
const App=()=>{
  return(
    <><BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={<Aboutus />} /> */}
          <Route path="Menu" element={<Menu/>} />
         
          <Route path="login" element={<Login />} /> 
          <Route path="register" element={<Register />} />
        </Route>
      
      </Routes></BrowserRouter></>
    
  )
}
export default App;