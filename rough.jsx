import React from 'react'
import web1 from "../src/images/op1.png";
import web2 from "../src/images/op2.png";
import web3 from "../src/images/op3.png";
// import web4 from "../src/images/op4.png";
// import web5 from "../src/images/op5.png";


const Project = () => {
    return (
        <>
       <div id="header" className="d-flex align-items-center">
             <div className="container-fluid nav_bg">
           
                 <div className="col-10 mx-auto"  >
                     <div className="row"> 

                     <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    {/* <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li> */}
  </ol>

  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src={web1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Home page</h5>
        <p></p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={web2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>About page</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={web3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>All products</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
      </div>
    </div>

    {/* <div class="carousel-item">
      <img src={web4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>T-shirt section</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={web5} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Mug section</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
      </div>
    </div> */}

  </div>


  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>

  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

                 
            

 
                  </div>
                  </div>
             </div>
          
        </div> 
            
        </>
    )
}

export default Project
