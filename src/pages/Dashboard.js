import { useState } from "react";
import styled from "styled-components";
import LiftList from "../components/LiftList";
import UploadIcon from '@mui/icons-material/Upload';
import FadeIn from "./FadeIn";

const transparent = `rgba(0, 0, 0, 0)`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 20px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
  height: 88vh;
  width: 50%;
  border-radius: 20px;
  background-color: #2b3445;
  align-items: center;
  gap: 10px;
`

const LongBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  border-radius: 20px;
  background-color: #2b3445;
  gap: 10px;
`

const StyledUpload = styled.button`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  display: flex;
  background-color: #0058ff;
  border: none;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
        background-color: #0241b8;
    }
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
  background-color: transparent;
  height: 10%;
  justify-content: left;
  margin: 20px 12px 30px 20px;
`

const StyledUploadTitle = styled.div`
  font-size: 20px; 
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: transparent;
  height: 10%;
  justify-content: center;
  margin: 10px;
`

const ResultTitle = styled.div`
  display: flex;
  background-color: transparent;
  height: auto;
  width: auto;
  justify-content: center;
  margin: 30px 20px 60px 20px;
  font-size: 26px;
  font-weight: 600;
`

const ScoreIcon = styled.div`
  display: flex;
  font-size: 120px;
  font-weight: 600;
  background-color: transparent;
  height: 250px;
  width: 250px;
  border: 20px solid #0058ff;
  border-radius: 150px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
`

const StyledSummary = styled.div`
  display: flex;
  background-color: transparent;
  height: 20%;
  width: 250px;
  font-size: 20px;
  justify-content: center;
  align-items: center;

`

const LongBlockTitle = styled.div`
  font-size: 26px; 
  font-weight: 600;
  text-align: left;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: transparent;
  height: 10%;
  justify-content: left;
  margin: 20px 12px 30px 40px;
`

const StyledInstructions = styled.div`
    display: flex;
    flex: 1;
    font-size: 20px; 
    background-color: transparent;
    height: 100%;
    margin: 8px;
    margin-left: 80px;
    justify-content: left;
  `

  const DashboardTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    padding: 20px 60px 20px 0px;
    border-bottom: 1px; 
    border-color: black;
    display: flex;
  
  `

const Dashboard = () => {
  const [lifts, setLifts] = useState([
    { name: 'Bench Press', weight: 135, date: '1/26', form: 55, id: 1 },
    { name: 'Bicep Curl', weight: 60, date: '1/30', form: 76, id: 2 },
    { name: 'Bench Press', weight: 150, date: '2/17', form: 33, id: 3 },
  ])
  
  return (
    <FadeIn>
      <StyledContainer>
        <StyledSection>
          <DashboardTitle> Caple's Dashboard </DashboardTitle>
        </StyledSection>
        <StyledSection>
          <StyledLeft>
            <LongBlock>
              <LongBlockTitle> How to Use </LongBlockTitle>
              <StyledInstructions> Step 1: Upload a video of your exercise </StyledInstructions>
              <StyledInstructions> Step 2: Wait for our AI to generate a Form Score </StyledInstructions>
              <StyledInstructions> Step 3: Use our suggestions to improve your form and exercise more effectively </StyledInstructions>
            </LongBlock>
            <StyledBottom>
              <StyledUpload>
                <UploadIcon style={{backgroundColor: 'transparent', height: 100, width: 100}}></UploadIcon>
                <StyledUploadTitle> Upload </StyledUploadTitle>
              </StyledUpload>
              <StyledInfo>
                <StyledInfoTitle> Recent Uploads </StyledInfoTitle>
                <LiftList lifts={lifts}/>
              </StyledInfo>
            </StyledBottom>          
          </StyledLeft>
          <VertBlock>
            <ResultTitle> Insert Lift </ResultTitle>
            <ScoreIcon> 90 </ScoreIcon>
            <StyledSummary> Your average FormScore is in the top 1%</StyledSummary>
          </VertBlock>
        </StyledSection>
      </StyledContainer>
    </FadeIn>
  );
}
 
export default Dashboard;