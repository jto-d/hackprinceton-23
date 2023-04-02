import React, { useState } from 'react';
 import { Upload, Button } from "antd";
 import styled, {css} from 'styled-components'
import { useSendVideoMutation } from '../utils/userAuthApi';


const StyledContainer = styled.div`
height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled.button`
  margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;
    width: 15%;
    margin-right: auto;

    text-decoration: none;
    border: none;
    font-size: 1.2rem;
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



const Video = () => {

    const [filename, setFilename] = useState('')

    const [sendVideo] = useSendVideoMutation();

    const handleChange = async (info) => {
        setFilename(info.file.name)

        console.log(filename)

        const response = await sendVideo({"file": filename})

        console.log(response)

        if (response.data) {
          window.open("score", '_self')
        }

     //set the video file to videoSrc here
    };


    return (
        <StyledContainer>
            <div className="action">
                <Upload className="mt-3 mb-3"
                    accept=".mp4"
                    listType="picture"
                    maxCount={1}
                    onChange={handleChange}>
                    <StyledButton>
                       Upload
                    </StyledButton>
                </Upload>
            </div>


        </StyledContainer>
    )
}

export default Video
