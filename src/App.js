import './App.css';


//Reac router dom

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Components

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
//Views

import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import { useState } from 'react';




function App() {
  const [favouriteCharacter, setFavouriteCharacter] = useState([])

  return (
    
    <Router>
      <div className="App">
        <Header/>
        <Nav favouriteCharacter={favouriteCharacter}/>
        <Routes>
          <Route path='/'  element={<Home setFavouriteCharacter={setFavouriteCharacter}  />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/detail/:id' element={<CharacterDetail setFavouriteCharacter={setFavouriteCharacter} />}></Route>

        </Routes>

      </div>
    </Router>
  );
}

export default App;
