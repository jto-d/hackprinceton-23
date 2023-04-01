import styled from "styled-components";

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
  width: 100%;
  height: 60vh;
  border-radius: 20px;
  background-color: #2b3445;
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
  border-radius: 20px;
  background-color: #2b3445;
`

const Home = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledLeft>
          <LongBlock></LongBlock>
          <StyledBottom>
            <StyledUpload></StyledUpload>
            <StyledInfo></StyledInfo>
          </StyledBottom>          
        </StyledLeft>
        <VertBlock></VertBlock>
      </StyledSection>
    
    </StyledContainer>
  );
}
 
export default Home;