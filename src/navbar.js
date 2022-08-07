import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/navbar.css';
import {NavLink} from "react-router-dom";
import data from "./data.json";

function Navbar({ placeholder }){
    const [shownavitems,setshownavitems]=useState(false);
    const [showsearch,setshowserach]=useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    
    const newFilter = data.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.category[0].toLowerCase().includes(searchWord.toLowerCase()) ||
        value.description.toLowerCase().includes(searchWord.toLowerCase())
        );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  

   
  };

  window.onclick = function(e){
    if(!e.target.matches(".searchInputs")){
     let dataresult = document.getElementsByClassName("dataResult");

      for(let i =0;i<dataresult.length;i++){
        let x = dataresult[i];
        if(x.classList.contains("dataResult")){
          x.style.display = "none";
        }
      }
    }

    
  }
    
    return (
            <>
        <nav className="navbar shadow" >
        <Link to="#" className="hamburger"onClick={()=>setshownavitems(!shownavitems)}>
            <i className="fas fa-bars"></i>
        </Link>

            <div className={shownavitems?"left nav-active":"left"}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <Link to="/" style={{textDecoration:"none"}}><h2 className="webname">Game_Parlour</h2></Link>
            <div className={showsearch?"right search-active":"right"}> 
          
                    <input
                      type="text"
                      placeholder="Search..."
                      value={wordEntered}
                      onChange={handleFilter}
                      className="searchInputs"
                    />
        {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <NavLink className="dataItem" key={value.id} to={`game/${value.id}`} >
                <p>{value.name}</p>
              </NavLink>
            );
          })}
        </div>
      )}
         
    </div>
            <Link to="#" className="search-icon" onClick={()=>setshowserach(!showsearch)}>
                <i className="fas fa-search"></i>
            </Link>
        </nav>  
            </>  
    )
}

export default Navbar;
