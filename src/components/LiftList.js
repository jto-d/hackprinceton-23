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
    justify-content: center;
    align-items: center;
  `

  const StyledInfoName = styled.div`
    display: flex;
    flex: 1;
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    margin-left: 40px;
    justify-content: left;
    align-items: center;
  `

  const StyledFormBlock = styled.div`
    display: flex;
    background-color: #0058ff;
    height: 100%;
    width: auto;
    margin: 8px 40px 8px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 0px 10px;
  `

  return (
    <StyledWrapper>
      {lifts.map((lift) => (
        <StyledInfoContainer key={lift.id}>
          <StyledInfoName> { lift.name } </StyledInfoName>
          <StyledInfoEntry> { lift.weight } lbs </StyledInfoEntry>
          <StyledInfoEntry> { lift.date } </StyledInfoEntry>
          <StyledFormBlock> Form: { lift.form } </StyledFormBlock>
        </StyledInfoContainer>
      ))}
    </StyledWrapper>
  );
}
 
export default LiftList;