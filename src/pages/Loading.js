import React, {useState, useEffect} from "react";
import styled from "styled-components";
import BounceLoader from "react-spinners/BounceLoader";
import { Superscript } from "@mui/icons-material";
import Typewriter from "typewriter-effect";



const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 40px;
  
  margin-top: 120px;
  margin-bottom: 50px;
`

const StyledText = styled.p`
  display: flex;
  color: #0058ff;
  font-size: 24px;
  font-weight: 200;
  justify-content: center;
`

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
  }, []);

  return (
    <StyledWrapper>
      <StyledLoader>
      <BounceLoader
        color={'#0058ff'}
        loading={loading}
        size={175}
      />
    </StyledLoader>

    <StyledText>
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Calculating your Form Score...")
         
       .pauseFor(1000)
       .start();
       }}
       />
    </StyledText>

    {/* <StyledText> Calculating your FormScore<sup>&#174;</sup>... </StyledText> */}
    </StyledWrapper>

  );
}
 
export default Loading;