import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (

<nav style={{backgroundColor:"#3c313d"}} className="navbar navbar-expand-lg navbar-light  ">
  <a className="navbar-brand " style={{fontFamily: 'Aguafina Script'}} href="/">Pridwin</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav d-flex flex-reverse pull-right">
      <li className="nav-item p-2">
      <Link className="Link" to="/"><i className="fas fa-home"></i> Home</Link>
      </li>
      {/* <li className="nav-item p-2">
      <Link className="Link" to="/portfolio"><i className="fas fa-home"></i> Portfolio</Link>
      </li> */}
      <li className="nav-item p-2">
      <Link className="Link" to="/skills"> <i class="fa fa-sign-language" aria-hidden="true"></i> Skills</Link>
      </li>
      <li className="nav-item p-2">
      <Link className="Link" to="/about"> <i className="fas fa-info-circle"></i> About</Link>
      </li>
      <li className="nav-item p-2">
      <Link className="Link" to="/contact"> <i className="fas fa-phone-square"></i> Contact</Link>
      </li>

    
    </ul>

  </div>
</nav>



   
    )
}
export default Navbar;