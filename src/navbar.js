import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/navbar.css';

function Navbar(){
    const [shownavitems,setshownavitems]=useState(false);
    const [showsearch,setshowserach]=useState(false);
    return (
            <>
        <nav className="navbar">
        <Link to="#" className="hamburger"onClick={()=>setshownavitems(!shownavitems)}>
            <i className="fas fa-bars"></i>
        </Link>

            <div className={shownavitems?"left nav-active":"left"}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>

            <h2 className="webname">Game_Parlour</h2>

            <div className={showsearch?"right search-active":"right"}>
                <input type="text"/>
                <button>Search</button>
            </div>

            <Link to="#" className="search-icon" onClick={()=>setshowserach(!showsearch)}>
                <i className="fas fa-search"></i>
            </Link>
        </nav>  
            </>  
    )
}

export default Navbar;
