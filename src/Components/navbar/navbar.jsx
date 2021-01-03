import React from 'react' 
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    
    return(
        <div className="navbar flex aic container-fluid">
            <div className="container flex jcsb">
                <Link to="/"><img src="https://ik.imagekit.io/hbj42mvqwv/logo_q8sOg9Nxu.png" alt="logo" /></Link> 
            </div> 
        </div>
    )
}
export default Navbar