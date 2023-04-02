import React, {useState, useEffect} from "react";
import styled from "styled-components";
import CircleLoader from "react-spinners/CircleLoader";
import { Superscript } from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import FadeIn from "./FadeIn";
<<<<<<< HEAD
import { useGetScoreQuery } from "../utils/userAuthApi";
import SouthIcon from '@mui/icons-material/South';

import { Player } from 'video-react';

import jackVid from '../assets/output_videos/output_jack.mp4'
import capleVid from '../assets/output_videos/output_caple.mp4'
=======
import SouthIcon from '@mui/icons-material/South';
>>>>>>> f59057e100e77eb989e83a36dc90795655b5a4f4

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  width: auto;
  border: none;
  font-size: 16px;
  background-color: #0058FF;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #DAE9FF;
  cursor: pointer;
  border-radius: 40px;

  &:hover {
      background-color: #0241b8;
  }

`

const VertBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: auto;
  border-radius: 20px;
  align-items: center;
  gap: 10px;
`

const ResultTitle = styled.div`
  display: flex;
  background-color: transparent;
  height: auto;
  width: auto;
  justify-content: center;
  margin: 30px 20px 30px 20px;
  font-size: 26px;
  font-weight: 600;
`

const ScoreIcon = styled.div`
  display: flex;
  font-size: 100px;
  font-weight: 600;
  background-color: transparent;
  height: 250px;
  width: 250px;
  border: 20px solid #0058ff;
  border-radius: 150px;
  margin-bottom: 120px;
  justify-content: center;
  align-items: center;
`

const HorizontalBlock = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 100%;
  margin-left: 120px;

  a {
    text-decoration: none;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 40px;
  
  margin-top: 120px;
  margin-bottom: 50px;
  
`

const StyledText = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 200;
  justify-content: center;

  div {
    color: #0058ff;
  }
`

const Score = () => {
  const [loading, setLoading] = useState(true);

  const { data, isSuccess } = useGetScoreQuery()

  /* useEffect(() => {
    if (data.score != null) {
      console.log(data)
    }
  }) */

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  }, []);

  if (loading) {
    return (
      <StyledWrapper>
          <StyledLoader>
            <CircleLoader
            color={'#FFFFFF'}
            loading={loading}
            size={175}
            />
          </StyledLoader>

          <StyledText>
            <Typewriter
              onInit={(typewriter)=> {
                typewriter
                  .typeString("Calculating your Form Score...")
                  .start();
              }}
            />
          </StyledText>
        </StyledWrapper>
    )
  } else {
    console.log(data)

    let video = null
    if (data.name === "jack") {
      video = jackVid
    } else {
      video = capleVid
    }
    return (
    <div>
        <FadeIn>
          <StyledContainer>
            <HorizontalBlock>
              <a href='/dashboard'> <StyledButton> Back to Dashboard</StyledButton> </a>
            </HorizontalBlock>
            <VertBlock>
                <ResultTitle> Bench Press </ResultTitle>
<<<<<<< HEAD
                <ScoreIcon> {data.score} </ScoreIcon>
                <SouthIcon style={{backgroundColor: 'transparent', height: 50, width: 50, marginTop: 200}}></SouthIcon>
            </VertBlock>
          </StyledContainer>
          <StyledContainer>
            <video playsInline poster="../assets/thumbnail.png" autoPlay 
            width={300} height={1000} controls loop muted >
              <source src={video} type="video/mp4" />
            </video>
          </StyledContainer>
=======
                <ScoreIcon> 90 </ScoreIcon>
                <SouthIcon style={{backgroundColor: 'transparent', height: 50, width: 50}}></SouthIcon>
            </VertBlock>
          </StyledContainer>
          <StyledContainer></StyledContainer>
>>>>>>> f59057e100e77eb989e83a36dc90795655b5a4f4
        </FadeIn>

      
    </div>
  );
  }
  
  
  
}
 
export default Score;