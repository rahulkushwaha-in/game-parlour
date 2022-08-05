import './App.css';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Playpage from "./playpage";
import Home from "./Home";
import Footer from './Footer';
import Contactus from './contact';
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="" element={<Home/>}></Route>
        <Route path="/game/:id" element={<Playpage/>}></Route>
        <Route path="/contact" element={<Contactus/>}> </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
  
}


export default App;
