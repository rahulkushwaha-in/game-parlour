import React, { useState, useEffect } from "react";
import data from "./data.json";
import{useParams} from "react-router-dom";
import styled from "styled-components";
import Navbar from "./navbar";

function filterById(jsonObject, id) 
{return jsonObject.filter(function(jsonObject) 
    {return (jsonObject['id'] === parseInt(id));})[0];
}

       
function Playmode()
{    useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    const {id}= useParams();
    const singledata=filterById(data,id);
    const [showplaybutton,setplaybutton]=useState(true);
    const [isFullScreen, setFullScreen] = useState(false);
    function playbutton(){
        setplaybutton(!showplaybutton);
    };

    function fullscreen(){
        setFullScreen(!isFullScreen);
    };
   
    
    return(
        <>
        {isFullScreen? null : <Navbar/>}
        <Maincontainer>
        <Container>
        <div className={showplaybutton?"play-button":"active"}> 
            <img src={singledata.image} alt=""/>
        </div>
        <button className={showplaybutton?"pbutton":"active"} 
        onClick={()=>{
            playbutton();
            fullscreen();
        }}
        >Play</button>
        
        
        <div className="iframeHolder">

            {isFullScreen ? <iframe title = {singledata.name} className="fullScreenMode" src={singledata.Elink} scrolling="no" frameBorder="0"></iframe> : null }
            
        </div>
        </Container>
        
        <div className="gamedetails">

            <h3>- {singledata.name}</h3>
            <h2>Game Description : </h2>
            <p>{singledata.description}</p>
        </div>
        </Maincontainer>
        </>

    )
};
const Maincontainer=styled.div`
.gamedetails{ 
    width:85%;
    margin:auto;
    margin-top:6rem;
    margin-bottom:2rem;
    border: 3px solid #33332d;
    box-shadow: -10px 10px #33332d;
    padding:1rem;
}
.gamedetails p
{   margin-top:.6rem;
    font-family: 'Roboto Mono', monospace;
    font-size:1.2rem;
    line-height:2rem;
}
.gamedetails h3{
    font-size:2rem;
    text-decoration:underline;
    margin-bottom:1rem;
    font-family: 'Roboto Mono', monospace;
}

`;

const Container=styled.div`
top:1.2rem;
position: relative;

.iframeHolder{
    border: 3px solid #33332d;
    box-shadow: -10px 10px #33332d;
    z-index:10;
    width: 80%;
     margin : 1.3rem 10%;
     height: 80vh;
  
}
.frame{
    /* display: none; */
     width: 80%;
     margin : 0 10%;
     height: 80vh;
    //  max-width: 100%!important;
    //  max-height: 100vh!important; 
    //  height: 100%!important;
    
 }
 
 
 .play-button{
    overflow:hidden;
     width: 80%;
     margin : 0 10%;
     height: 80vh;
     position:absolute;
 
 }
 .play-button img{
     width:100%;
     height: 80vh;
     z-index:10; 
     filter: blur(10px);
 }
 .pbutton{
    position: absolute;
    top: 38vh;
    left: 45vw;
     width: 13%;
     height: 10%;
     border-radius: 10px;
     background: green;
     color:white;
     border:none;
     font-size: 1rem;
     font-weight: bold;
     font-family: 'Roboto Mono', monospace;
     cursor: pointer;
     &:hover{
        background: white;
        color: green;
     }
 }
 .active{
     display: none;
 }
 
 .play-active{
     display: block;
 }

 .fullScreenMode{
    width:100%;
    height:100vh;
    position:fixed;
    left:0;
    top:0;
    max-width: 100%!important;
    max-height: 100vh!important; 
    height: 100%!important;
 }

@media(max-width:768px)
{
    .pbutton{
    position: absolute;
    top: 38vh;
    left: 38vw;
     width: 20%;
     height: 10%;
     border-radius: 10px;
     background: green;
     color:white;
     border:none;
     font-size: 1rem;
     font-weight: bold;
     font-family: 'Roboto Mono', monospace;
     cursor: pointer;
     &:hover{
        background: white;
        color: green;
     }
    }
}
@media(max-width:550px){
    top:10vh;
}

@media(max-width:460px){
    .play-button{
        overflow:hidden;
         width: 80%;
         margin : 0 10%;
         height: 50vh;
         position:absolute;
     
     }
    .play-button img{
        height:50vh;
    }
    .iframeHolder{
        height:50vh;
    }


}

 
 

`;

export default Playmode;