import React from 'react'

import styled from 'styled-components'

import landingPic from '../assets/landing.jpeg'


const StyledContainer = styled.div`
    display: flex;
    height: 88vh; 
    align-items: center;
    justify-content: space-between;
`

const StyledPhoto = styled.div`
    width: 60vw;
    display: flex;
`

const StyledCircle = styled.div`
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
    background-color: #DAE9FF;
    margin-left: -4vw;
    margin-top: -4vh;
    z-index: 4;
    position: absolute;
    /* margin-bottom: 55vh; */
`
const StyledHeroText = styled.div`
    display: flex;
    color: #DAE9FF;
    flex-direction: column;

`

const StyledImg = styled.div`
    display: flex;
    min-height: 60vh;
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 15vh;
    width: 60vw;
    background-image: url(${landingPic});
`

const Home = () => {
  return (
   <>

    
    <StyledContainer>
        <StyledHeroText>
            <h1>
                Fix your form
            </h1>
            <p>
                Form Fit analyzes your using computer vision to give detailed insights on correcting your exercise form to minimize 
            </p>
        </StyledHeroText>
        <StyledPhoto>
            <StyledCircle/> 
            <StyledImg/>
        </StyledPhoto>
        
    </StyledContainer>
    
   </>     
   
  )
}

export default Home