import styled from "styled-components";

const LiftList = (props) => {

  const lifts = props.lifts;

  const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0);
  `

  const StyledInfoContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    font-size: 18px;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0);
    margin: 5px 0px;
    height: 20%;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
  `
  
  const StyledInfoEntry = styled.div`
    display: flex;
    flex: 1;
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    margin: 8px;
    text-align: center;
  `

  const StyledInfoName = styled.div`
    display: flex;
    flex: 1;
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    margin-left: 40px;
    text-align: left;
  `

  return (
    <StyledWrapper>
      {lifts.map((lift) => (
        <StyledInfoContainer key={lift.id}>
          <StyledInfoName> { lift.name } </StyledInfoName>
          <StyledInfoEntry> { lift.weight } </StyledInfoEntry>
          <StyledInfoEntry> { lift.date } </StyledInfoEntry>
          <StyledInfoEntry> Form: { lift.date } </StyledInfoEntry>
        </StyledInfoContainer>
      ))}
    </StyledWrapper>
  );
}
 
export default LiftList;