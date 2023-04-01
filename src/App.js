
import styled from 'styled-components';
import { Home, Dashboard, Login, Register, Video } from './pages'
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import { store } from './store/store'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (   
    <div> 
      {/* <Navbar /> */}
<<<<<<< HEAD
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
=======
      <Routes>
        <Route path="/" element={<Home />} />
>>>>>>> ff194e3568a92f8245ac86efd9e8f4ab7907ea4a

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/video" element={<Video />} />

          <Route path="/dashboard" element={<Dashboard />} /> 

        </Routes>
      </Provider>
    </div>
  );
}

export default App;
