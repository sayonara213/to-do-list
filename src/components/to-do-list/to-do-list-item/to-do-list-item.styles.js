import styled from "styled-components";
import {FONT_SIZE} from "../../../constants/theme";

export const ToDoListItemWrap = styled.div`
  margin: 10px 0;

  display: flex;
  align-items: center;
  width: 100%;

  border: 2px solid ${props => props.color};;
  border-radius: 15px;

  overflow: hidden;

`;

export const ToDoListItemText = styled.textarea`
  margin: 5px;
  padding: 10px;
  width: 70%;

  color: ${props => props.color};
  font-size: ${FONT_SIZE.medium};

  border: none;
  outline: none;
  
  resize: none;
`;


export const ToDoListItemButton = styled.button`
  margin: 5px 10px;
  width: 150px;
  height: 50px;
  
  border: 2px solid ${props => props.color};;
  border-radius: 10px;

  font-size: ${FONT_SIZE.small};
  color: ${props => props.color};
  
  background-color: #ffffff;
`;