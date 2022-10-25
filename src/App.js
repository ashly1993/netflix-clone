
import React from 'react';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Rowpost from './Components/Rowpost/Rowpost';
import {Orginals,Action,ComedyMovies,HorrorMovies,RomanceMovies} from './urls'


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost url={Orginals} title="Netflix Orginals"/>
    <Rowpost url={Action} title="Action" isSmall/>
    <Rowpost url={ComedyMovies} title="ComedyMovies" isSmall/>
    <Rowpost url={HorrorMovies} title="HorrorMovies" isSmall/>
    <Rowpost url={RomanceMovies} title="RomanceMovies" isSmall/>
  
    </div>
  );
}

export default App;
