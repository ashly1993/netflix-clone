
import React from 'react';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Rowpost from './Components/Rowpost/Rowpost';
import {Orginals,Action,ComedyMovies,HorrorMovies,RomanceMovies} from './urls'
import SamplePost from './Components/SamplePost/SamplePost';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost url={Orginals} title="Netflix Orginals"/>
    <Rowpost id='action' url={Action} title="Action" isSmall/>
    <Rowpost id='comedy' url={ComedyMovies} title="ComedyMovies" isSmall/>
    <Rowpost id='horror' url={HorrorMovies} title="HorrorMovies" isSmall/>
    <Rowpost id='romance'url={RomanceMovies} title="RomanceMovies" isSmall/>


    <SamplePost url={Orginals} />
    <SamplePost  url={Action}  isSmall/>
   
  
    </div>
  );
}

export default App;
