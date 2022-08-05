import './App.css';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Playpage from "./playpage";
import Home from "./Home";
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Home/>}></Route>
        <Route path="/game/:id" element={<Playpage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
  
}


export default App;
