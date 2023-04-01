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
  font-size: 20; 
  font-weight: 600;

  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: rgba(0,0,0,1);
  height: auto;
  justify-content: left;
  margin-left: 12px;
  margin-top: 12px;
`

const Home = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledLeft>
          <LongBlock>
            <StyledPicture> Hello </StyledPicture>
            <StyledInfoP> Home </StyledInfoP>
          </LongBlock>
          <StyledBottom>
            <StyledUpload></StyledUpload>
            <StyledInfo>
              <StyledInfoTitle> Title </StyledInfoTitle>
            </StyledInfo>
          </StyledBottom>          
        </StyledLeft>
        <VertBlock></VertBlock>
      </StyledSection>
    
    </StyledContainer>
  );
}
 
export default Home;