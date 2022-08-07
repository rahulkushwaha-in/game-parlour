import React, { useState } from "react";
// import Card from "./card";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Navbar from "../navbar.js"

function SearchBar({ placeholder, data, filteredData }){
    
    const [wordEntered, setWordEntered] = useState("");
    // const [isClick, setIsClick] = useState(false);

//   const handleFilter = (event) => {
//         const searchWord = event.target.value;
//         setWordEntered(searchWord);
        
//         const newFilter = data.filter((value) => {
//           return (
//             value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
//             value.category[0].toLowerCase().includes(searchWord.toLowerCase()) ||
//             value.description.toLowerCase().includes(searchWord.toLowerCase())
//             );
//         });
    
//         if (searchWord === "") {
//           setFilteredData([]);
//         } else {
//           setFilteredData(newFilter);
//         }
//       };

    //   const clearInput = () => {
    //     setFilteredData([]);
    //     setWordEntered("");
    //   };

    //   const  submitSearch =(e)=>{
    //     e.preventDefault();
    //     setFilteredData(wordEntered);
    //     setIsClick(!isClick);
    //     // setWordEntered("");
    //   }
    return(
        <>
            <div className="search">
            <div className="searchInput">
            {/* <input type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}/> */}
             <div className="searchIcon">
                {/* {filteredData.length === 0 ? (
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                         ) : ( 
                            <font-awesome-icon icon="fa-solid fa-xmark" id="clearBtn"/>
                      
                )} */}

                {/* <button>Search</button> */}
        </div>
            </div>
           
           {filteredData && filteredData.map((value,key)=>{

                return (
                
                   
                    <NavLink key={value.id} to={`game/${value.id}`} style={{textDecoration:"none",color:"black"}} >  
               <Card1 >
               
            <div  className="card-img"><img src={value.image} alt="" /></div>
            <div className="card-detail">
                <h4>{value.name}</h4>
                <p>{value.category + " "}</p>
            </div>
        </Card1>
        </NavLink>
                );

           })}
            </div>
        </>
    );

}

const Card1 = styled.div`


    margin: 1.5rem;
    width : 12rem;
    height:15rem;
    /* background: yellow; */
    border: 3px solid #33332d;
    box-shadow: 10px 10px #33332d;
    font-family: 'Roboto Mono', monospace;
    overflow:hidden;

    h4{
        word-spacing:-5px;
        // text-decoration:underline;
        border-bottom:2px solid black;
    }
    

.card-img img{
    width: 100%;
}
.card-detail p{
    overflow:hidden;
    color:#878787;
}
.card-detail{
    margin:0.2rem 0.5rem 0.5rem 0.5rem;
    
}
&:hover{
   
    box-shadow: 10px 10px #33332d9d;
    /* background: white; */
    color: aliceblue;
    
    transition: all .5s ease;
    background: #33332d;  
   
}

@media(max-width:550px){
        width: 8.3rem;
        height:11rem;
  
}


`;


export default SearchBar;