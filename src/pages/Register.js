import React, { useState } from 'react'

import styled, { css } from 'styled-components'

import { useSignupUserMutation } from '../utils/userAuthApi'

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: flex-end;

`

const StyledButton = styled.button`
  margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    width: 15%;

    text-decoration: none;
    border: none;
    /* box-shadow: 1px 1px 2px black; */

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

const StyledRight = styled.div`
  background-color: #2B3445;
  width: 66%;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  text-align: left;


  h1 {
    background-color: #2B3445;
    font-weight: 600;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 300;
    margin-top: 1rem;
    background-color: #2B3445;
    width: 70%;
    line-height: 1.3rem;
  }

  p {
    background-color: #2B3445;
    letter-spacing: 0.05em;
    margin-top: 2rem;
    font-size: 0.8rem;
    font-weight: 200;

    a {
      margin-left: 3rem;
      text-decoration: none;
      background-color: #2B3445;
      color: #0058FF;
      
      &:hover {
        color: #0241b8;
      }
    }
  }

`

const StyledText = styled.div`
  background-color: #2B3445;
  margin-left: 20%;
`

const StyledForm = styled.form`
  background-color: #2B3445;
`

const FormInput = styled.div`
  background-color: #2B3445;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  margin-top: 20px;
  input {
    margin-top: 3px;
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

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const [signupUser] = useSignupUserMutation()

  const clearTextInput = () => {
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setPassword2('')
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const formData = { 'first_name': firstName, 'last_name': lastName,
                      email, password, password2 }

    console.log(formData)
    const response = await signupUser(formData)

    console.log(response)

    if (response.data) {
      clearTextInput()
      window.open("dashboard")
    }
  }


  return (
    <StyledContainer>
      <StyledRight>
        <StyledText>
          <h1> Set up your account</h1>
          <h2>Create an account to join the Form Fit community.
              You're just a few clicks from correcting your form! </h2>
          <StyledForm>
            <FormInput>
              <input
              value={firstName}
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              />
            </FormInput>
            <FormInput>
              <input
              value={lastName}
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              />
            </FormInput>
            <FormInput>
              <input
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              />
            </FormInput>
            <FormInput>
              <input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              />
            </FormInput>
            <FormInput>
              <input
              value={password2}
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPassword2(e.target.value)}
              />
            </FormInput>

            <StyledButton type="submit"
                          onClick = {handleFormSubmit}>
              Continue
            </StyledButton>

            <p> Already have an account? <a href='login/'> Sign in → </a> </p>
            
          </StyledForm>
        </StyledText>

      </StyledRight>
    </StyledContainer>
  )
}

export default Register