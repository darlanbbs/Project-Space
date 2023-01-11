//arquivos
import { useState,useEffect } from 'react';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';



//pages
import {Home} from './pages/Home'
import { Crew } from './pages/Crew';
import { Destination } from './pages/Destination';
import { Moon } from './Locals/Moon';
import { Mars } from './Locals/Mars';
import { Titan } from './Locals/Titan';
import { Europa } from './Locals/Europa';
import { Commander } from './tripulation/Commander';
import {Engineer} from './tripulation/Engineer'
import { Pilot } from './tripulation/Pilot';
import { Specialist } from './tripulation/Specialist';

//components

import {NavBarTop} from './components/NavBarTop'

import { VehicleOne } from './vehicles/VehicleOne';
import { VehicleTwo } from './vehicles/VehicleTwo';
import { VehicleThree } from './vehicles/VehicleThree';
import { Technology } from './pages/Technology';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarTop />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/crew' element={<Crew/>}/>
            <Route path='/crew/*' element={<Crew/>}/>
            <Route path='/crew/engineer' element={<Engineer/>}/>
            <Route path='/crew/pilot' element={<Pilot/>}/>
            <Route path='/crew/specialist' element={<Specialist/>}/>
            <Route path='/crew/commander' element={<Commander/>}/>
            <Route path='/destination/commander' element={<Destination/>}/>
            <Route path='/destination/*' element={<Destination/>}/>
            <Route path='/destination/moon' element={<Moon/>}/>
            <Route path='/destination/mars' element={<Mars/>}/>
            <Route path='/destination/europa' element={<Europa/>}/>
            <Route path='/destination/titan' element={<Titan/>}/>
            <Route path='/technology' element={<Technology/>}/>
            <Route path='/technology/*' element={<VehicleOne/>}/>
            <Route path='/technology/1' element={<VehicleOne/>}/>
            <Route path='/technology/2' element={<VehicleTwo/>}/>
            <Route path='/technology/3' element={<VehicleThree/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
