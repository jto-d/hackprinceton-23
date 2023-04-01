import { useState } from "react";
import styled from "styled-components";
import LiftList from "../components/LiftList";

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 20px;
`

const StyledContainer = styled.div`
  height: 88vh;
  margin-left: 100px;
  margin-right: 40px;

`

const StyledBottom = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  height: 40vh;
  width: 100%;
  gap: 20px;
`

const StyledLeft = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const VertBlock = styled.div`
  height: 88vh;
  width: 50%;
  border-radius: 20px;
  background-color: #2b3445;
`

const LongBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60vh;
  border-radius: 20px;
  background-color: #2b3445;
  gap: 10px;
`

const StyledUpload = styled.button`
  height: 100%;
  width: 30%;
  display: flex;
  background-color: #0058ff;
  border: none;
  border-radius: 20px;
`

const StyledInfo = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #2b3445;
`

const StyledInfoP = styled.p`
  display: flex;
  font-size: 22px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 1);
  margin: 20px 20px 20px 0px;
  height: auto;
  width: 70%;
  justify-content: center;
  align-items: center;
`

const StyledPicture = styled.a`
  display: flex;
  width: 30%;
  height: auto;
  background-color: black;
  border-radius: 20px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
  justify-content: center;
`

const StyledInfoTitle = styled.div`
  font-size: 20px; 
  font-weight: 600;
  text-align: left;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: rgba(0,0,0,0);
  height: 10%;
  justify-content: left;
  margin: 20px 12px 30px 20px;
`



const Dashboard = () => {
  const [lifts, setLifts] = useState([
    { name: 'Bench Press', weight: 135, date: '1/26', form: 55, id: 1 },
    { name: 'Bicep Curl', weight: 60, date: '1/30', form: 76, id: 2 },
    { name: 'Bench Press', weight: 150, date: '2/17', form: 33, id: 3 },
  ])
  
  return (
    <StyledContainer>
      <StyledSection>
        <StyledLeft>
          <LongBlock>
            
          </LongBlock>
          <StyledBottom>
            <StyledUpload></StyledUpload>
            <StyledInfo>
              <StyledInfoTitle> Recent Uploads </StyledInfoTitle>
              <LiftList lifts={lifts}/>
            </StyledInfo>
          </StyledBottom>          
        </StyledLeft>
        <VertBlock></VertBlock>
      </StyledSection>
    
    </StyledContainer>
  );
}
 
export default Dashboard;