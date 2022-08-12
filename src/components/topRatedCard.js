import React from "react";
// import { ReactDOM } from "react";
import data from '../data.json';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
// import Playmode from "../playpage";
function TopRatedCard()
{
   
    return(
        <> 
        {  
            data.map(d=>{
            return(
                d.istop === true && (
                <NavLink key={d.id} to={`game/${d.id}`} style={{textDecoration:"none",color:"black"}} >  
               <Card1>
                 
            <div className="card-img"><img src={d.image} alt="" /></div>
            <div className="card-detail">
           
                <h4>{d.name}</h4>
                <p>{d.category + " "}</p>
            </div>
        </Card1>
        </NavLink>
            ))
        })
        }
        </>
    ) 
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
export default TopRatedCard;
