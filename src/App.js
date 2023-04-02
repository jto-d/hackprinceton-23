
import styled from 'styled-components';
import { Home, Dashboard, Login, Register, Video, Loading, Score } from './pages'
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
import { store } from './store/store'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (   
    <div> 
      {/* <Navbar /> */}
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/video" element={<Video />} />

          <Route path="/dashboard" element={<Dashboard />} /> 

          <Route path="/loading/" element={<Loading />} /> 

          <Route path="/score/" element={<Score />} /> 

        </Routes>
      </Provider>
    </div>
  );
}

export default App;
