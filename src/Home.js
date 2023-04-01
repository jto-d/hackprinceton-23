import styled from "styled-components";

const StyledSection = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex: 1;
  text-align: center;
`

const StyledVert = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10;
`

const SideIcon = styled.div`
  width: 90px;
  height: 200px;
`

const StyledBlock = styled.div`
  width: 400px;
  height: 200px;
`

const Home = () => {
  return (
    <>
    <StyledSection>
      <SideIcon> icon </SideIcon>
      <StyledVert>
        <StyledBlock> top </StyledBlock>
        <StyledBlock> bottom </StyledBlock>
      </StyledVert>
    </StyledSection>
    </>
  );
}
 
export default Home;