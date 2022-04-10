// Author: @devangs

import React from "react";

import Fade from "react-reveal/Fade";
import styled from "styled-components";
function Section({
  title,
  description,
  backgroundImg,
  leftBtnTxt,
  rightBtnTxt,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade top>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnTxt}</LeftButton>
            {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
            {/* show only
          Right Button Exists */}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

//Wrap
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; //horizontal
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
//Text
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    margin-bottom: 8px;
  }
`;
//Button
const Buttons = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  color: white;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.8;
  text-transform: uppercase;
  font-size: 13px;
  margin: 10px;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-8px);
  }
`;
const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: black;
`;

//
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin-bottom: 30px;
  overflow-x: hidden;
`;
