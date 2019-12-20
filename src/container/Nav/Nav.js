import React  from 'react'
import  Style from '../Nav/Nav.css'
import { Link }  from 'react-router-dom'





export default ()=>{
    return(
        <nav  className="nav1">
            <ul className="nav-links">
                <Link to ='/about'>
            <li>about</li>
            </Link>
            <Link to ='/shop'>
            <li>shop</li>
            </Link>
            </ul>


            
        </nav>



    );
}