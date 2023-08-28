import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice Game</h2>
      <div className="text">
        <p>Select any Number</p>
        <p>Click On Dice Image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  text-align: start;
  max-width: 800px;
  margin: 40px auto;
  background-color: #fbf1f1;
  padding: 20px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    margin-top: 24px;
  }
`;
