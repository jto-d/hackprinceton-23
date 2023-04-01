import React, {useState } from 'react'
import styled, { css } from 'styled-components'


const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  h1 {
    font-weight: 500;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 300;
    margin-top: 1rem;
    width: 70%;
    line-height: 1.3rem;
  }
`

const StyledButton = styled.button`
  margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.8rem 4.5rem;
    width: 15%;

    text-decoration: none;
    border: none;
    /* box-shadow: 1px 1px 2px black; */

    background-color: #0058FF;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: #DAE9FF;
    cursor: pointer;
    border-radius: 40px;

    &:hover {
        background-color: #0241b8;
    }

    ${props => props.invert && css`
        color: #DAE9FF;
        background-color: #2B3445;

        &:hover {
            background-color: #191f29;
        }
    `}

`

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  width: 60%;
`

const FormInput = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  margin-top: 10px;
  input {
    margin-top: 20px;
    width: 100%;
    height: 30px;
    font-size: 14px;
    background-color: #2B3445;
    border: solid 1px #8888;
    border-radius: 15px;
    padding: 7px;
    padding-left: 20px;
    font-weight: 300;

    ::placeholder {
      color: #e6e6e6;
    }
  }

`

const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-top: 1rem;
`



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    
    <StyledContainer>

      <h1>Welcome Back</h1>
      <StyledForm>
        <FormInput>
          <input
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
          />
          <input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
          />
        </FormInput>
        
        

      </StyledForm>
      <StyledButtons>
          <StyledButton type="submit"/>
          <StyledButton invert />
      </StyledButtons>

    </StyledContainer>



  )
}

export default Login