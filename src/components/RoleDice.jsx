import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <section className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="Dice" />
      </section>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
