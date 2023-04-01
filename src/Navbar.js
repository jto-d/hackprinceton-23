import styled from "styled-components";

const StyledHeader = styled.div`
  font-size: 22px;
  padding: 20px 60px;
  border-bottom: 1px; 
  border-color: black;
  display: flex;
`

const StyledDiv = styled.div`
  margin-right: 15px; 
`

const Navbar = () => {
  return (
    <StyledHeader>
      <StyledDiv> logo </StyledDiv>
      <StyledDiv> Name </StyledDiv>
    </StyledHeader>
  );
}
 
export default Navbar;