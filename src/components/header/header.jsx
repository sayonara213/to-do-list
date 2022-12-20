import React from "react";
import {HeaderText, HeaderWrap} from "./header.styles";

export const Header = (props) => {
    return(
        <HeaderWrap>
            <HeaderText>{props.text}</HeaderText>
        </HeaderWrap>
    )
}