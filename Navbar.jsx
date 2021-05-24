import React from 'react'
import {NavLink} from "react-router-dom";
import web1 from "../src/images/1.jpg";
import './Navbar.css';


const Navbar = () => {
    return (
        <>
    
            <div className="container-fluid nav_bg">
             <div className="row">
                 <div className="col-10 mx-auto"  >

                
            <nav className="navbar navbar-expand-lg  navbar-light bg-red">
  <NavLink className=" navbar-img col-lg-1 col-lg-1.5" to="/">
      <img src={web1} className="card-img-top  "   alt="logo.jpg"/>
  </NavLink>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Blog<span className="sr-only"></span></NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/Project">My projects</NavLink>
      </li>

      
      
    </ul>
    
    
   
    <a href={"https://github.com/sitaula-priya" }target="_blank"> <i class="fa fa-github"></i></a>
    <a href={"https://instagram.com/e_van_zelina/"}target="_blank" class="fa fa-instagram"></a>
    <a href={"https://linkedin.com/in/priya-sitaula-970498176/"}target="_blank" class="fa fa-linkedin"></a>
    
   
  

   
 
    
   
    
  </div>
</nav>
</div>

</div>
</div>
       
        </>
    )
}

export default Navbar
