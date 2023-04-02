import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  width: auto;
  border: none;
  font-size: 16px;
  background-color: #0058FF;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #DAE9FF;
  cursor: pointer;
  border-radius: 40px;

  &:hover {
      background-color: #0241b8;
  }

`

const VertBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: auto;
  border-radius: 20px;
  align-items: center;
  gap: 10px;
`

const ResultTitle = styled.div`
  display: flex;
  background-color: transparent;
  height: auto;
  width: auto;
  justify-content: center;
  margin: 30px 20px 30px 20px;
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
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
`

const StyledSummary = styled.div`
  display: flex;
  background-color: transparent;
  height: 20%;
  width: 375px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-align: center
`

const HorizontalBlock = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 100%;
  margin-left: 120px;

  a {
    text-decoration: none;
  }
`

const Score = () => {
  return (
    <StyledContainer>
      <HorizontalBlock>
        <a href='/dashboard'> <StyledButton> Back to Dashboard</StyledButton> </a>
      </HorizontalBlock>
      <VertBlock>
          <ResultTitle> Bench Press </ResultTitle>
          <ScoreIcon> 90 </ScoreIcon>
          <StyledSummary> Your Form Score has improved by an average of 10 points since 3/4/23 </StyledSummary>
      </VertBlock>
    </StyledContainer>
  );
}
 
export default Score;