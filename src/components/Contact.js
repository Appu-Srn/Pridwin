import React from 'react';
import Prid_5 from '../Images/Prid_5.jpeg'


const Contact = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
        <div className="container">
            <h3 className="center text-secondary"><i className="fas fa-envelope-open"></i> Contact </h3>
            <br />
            <img  src = {Prid_5} className="img-rounded img-fluid" alt="Coding pic"></img>

<p> <i class="fa fa-envelope-open" aria-hidden="true"></i><b> Email: </b>pridwinpriyakumar@hotmail.com</p>
<p><b><i class="fa fa-map-marker" aria-hidden="true"></i> Address: </b>Flat no.303, Satyakiran CHS LTD Plot no.02, Sector-12, New Panvel, Navi-Mumbai, Maharashtra </p>
<p> <i class="fa fa-mobile" aria-hidden="true"></i> <b>Phone: </b>09605970997 </p>
        </div>
    )
}
export default Contact