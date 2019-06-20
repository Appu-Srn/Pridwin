import React from 'react';
import Prid_1 from '../Images/Prid_1.jpeg'
import Prid_2 from '../Images/Prid_2.jpeg'
import Prid_3 from '../Images/Prid_3.jpeg'

import Pridwin_CV from '../Images/Pridwin_CV.pdf'
import Pridwin_Portfolio from '../Images/Pridwin_Portfolio.pdf'


const About = () => {
    return (
        <div className="container">
            <h3 className="center text-secondary">About </h3>


            <center>
<p>For more information on Pridwin's work, to get in touch regarding new projects, 
or to just say hello, feel free to  get in touch.</p>
<p> <b> pridwinpriyakumar@hotmail.com</b></p>
      
<div  style={{width:"60%"}} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div  className="carousel-inner ">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Prid_1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img  className="d-block w-100" src={Prid_2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Prid_3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<br/>
<div className="row">
  <div className="col">
  <a target="_blank" href={Pridwin_Portfolio}>View My CV</a>
  </div>
  <div className="col">
  <a  target="_blank" href={Pridwin_CV}>View My Portfolio</a>
  </div>
</div>


</center>
        </div>
    )
}
export default About;