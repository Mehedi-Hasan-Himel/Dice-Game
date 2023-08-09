import React from "react";
import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <div>
        <img src="/images/dices1.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  color: #fff;
  background: #000;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border: 2px solid black;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
    transition: 0.3s ease-in-out;
  }
`;
