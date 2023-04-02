import React from 'react'

import styled, { css } from 'styled-components'

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

const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-top: 1rem;
`

const StyledButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    width: 15%;

    text-decoration: none;
    box-shadow: 1px 1px 3px black;

    background-color: #0058FF;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: #DAE9FF;
    cursor: pointer;
    border-radius: 25px;

    &:hover {
        background-color: #0241b8;
    }

    ${props => props.invert && css`
        background-color: #2B3445;
        color: #DAE9FF;

        &:hover {
            background-color: #191f29;
        }
    `}

`

const StyledCircle = styled.div`
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
    background-color: #DAE9FF;
    margin-left: -4vw;
    margin-top: -4vh;
    z-index: 2;
    position: absolute;
    /* margin-bottom: 55vh; */
`
const StyledHeroText = styled.div`
    display: flex;
    color: #DAE9FF;
    flex-direction: column;
    width: 31%;
    justify-content: center;
    margin: auto;

    h1 {
        font-size: 3rem;
    }

    p {
        margin-top: .8rem;
        line-height: 2rem;
        font-size: 1.5rem;
        font-weight: 300;
    }

`

const StyledImg = styled.div`
    display: flex;
    min-height: 60vh;
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 15vh;
    width: 60vw;
    background-image: url(${landingPic});
    z-index: 0;
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
                Form Fit analyzes your form using computer vision to give detailed insights on correcting bench press form to minimize injury and maximize muscle gain.
            </p>
            <StyledButtons>
                <StyledButton href='/register'>Register</StyledButton>
                <StyledButton href='/login' invert>Log In</StyledButton>
            </StyledButtons>
            
        </StyledHeroText>
        <StyledPhoto>
            <StyledImg/>
        </StyledPhoto>
        
    </StyledContainer>
    
   </>     
   
  )
}

export default Home