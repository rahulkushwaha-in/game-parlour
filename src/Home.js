import Navbar from './navbar';
import Card from './components/card';
import styled from "styled-components";
import TopRatedCard from './components/topRatedCard';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


 
  return (
    <>
    <div className="home-body">
    <Navbar placeholder="Search..."  />
  
    <Container>
    <h1>Top Rated</h1>
    <div className='card-section'>
      <TopRatedCard/>
    </div>
  </Container>
  <Container>
    <h1>Top played</h1>
    <div className='card-section'>
    <Card />
    </div>
  </Container>
    </div>
    </>
  );
  
}
const Container=styled.div`
   width:100%;
   margin:0 auto;
  //  filter: brightness(1.1);
   h1{
    // margin-left: 2rem;
    margin-top:4rem;
    font-family: 'Roboto Mono', monospace;
    border: 3px solid #33332d;
    box-shadow: -10px 10px #33332d;
    width:98%;
    margin:4rem auto 2rem auto;
    text-align:center;
    height:3.5rem;
    box-shadow: -10px 10px #33332d9d;
    color: aliceblue;
    background: #33332d; 
    
   }
   
   .card-section{
    
    align-content: center;
    justify-content: center;
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(15rem,1fr));
    gap:15px;

    @media(max-width:550px){
      grid-template-columns:repeat(auto-fill, minmax(10rem,1fr));
      gap:5px;
    }
    
}
`;

export default Home;