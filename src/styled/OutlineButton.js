import styled from "styled-components";
import { Button } from "./Button";

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 2px solid black;
  color: black;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: black;
    border: 2px solid black;
    color: white;
    transition: 0.3s ease-in-out;
  }
  
`;
