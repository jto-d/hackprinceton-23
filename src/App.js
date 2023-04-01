
import styled from 'styled-components';
import { Home, Dashboard, Login, Register, Video } from './pages'
import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom'

function App() {
  return (   
    <div> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register/" element={<Register />} />

        <Route path="/login/" element={<Login />} />

        <Route path="/video/" element={<Video />} />

        <Route path="/dashboard/" element={<Dashboard />} /> 

      </Routes>
    </div>
  );
}

export default App;
