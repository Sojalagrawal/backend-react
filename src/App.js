// import logo from './logo.svg';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';

import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <>
      <NoteState>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
      </Routes>
      </NoteState>
     
   
    </>
  );
}

export default App;




// git remote add origin https://github.com/Sojalagrawal/backend-react.git
// git branch -M main   
// git push -u origin main