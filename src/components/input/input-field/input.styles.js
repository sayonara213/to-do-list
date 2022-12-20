import styled from "styled-components";
import {FONT_SIZE} from "../../../constants/theme";

export const InputForm = styled.form`
  margin: 50px 0;
  
  display: flex;
  align-items: center;
  width: 100%;
  
  border: 2px solid #000000;
  border-radius: 15px;
  
  overflow: hidden;
  
  
`;

export const InputField = styled.textarea`
  margin: 5px;
  padding: 10px;
  width: 70%;
  
  color: #000000;
  font-size: ${FONT_SIZE.medium};
  
  border: none;
  outline: none;
  
  resize: none;
`;

export const InputButton = styled.button`
  margin: 5px 10px;
  width: 150px;
  height: 50px;
  
  font-size: ${FONT_SIZE.small};
  border: 2px solid #000000;
  border-radius: 10px;
  
  background-color: #ffffff;
`;