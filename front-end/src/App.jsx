import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';



import UserCard from './components/UserCard';
import NavBar from './components/NavBar';

import Homepage from './pages/Home';
import Formpage from './pages/Form';

function App() {
  return (
    <div>
      <NavBar/>
      <main className='main-content'> 
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/save' element={<Formpage/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
