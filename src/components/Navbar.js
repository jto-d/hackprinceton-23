import styled from "styled-components";

const StyledHeader = styled.div`
  font-size: 30px;
  font-family: var(--font-nunito);
  font-weight: 600;
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
      <StyledDiv> User </StyledDiv>
      <StyledDiv> Dashboard </StyledDiv>
    </StyledHeader>
  );
}
 
export default Navbar;