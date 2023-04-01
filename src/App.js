import styled from 'styled-components';
import Home from './Home';
import Navbar from './Navbar';

const Wrapper = styled.section`
  background-color: lightcoral;
  height: 100vh;
  width: 100vw; 
`

function App() {
  return (   
    <Wrapper> 
      <Navbar />
      <Home />
    </Wrapper>
  );
}

export default App;
