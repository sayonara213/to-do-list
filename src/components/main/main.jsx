import React from "react";
import {Header} from "../header/header";
import {Input} from "../input/input-field/input";
import {ToDoList} from "../to-do-list/to-do-list";

export const Main = () => {
    return(
        <>
            <Header text={"To Do List"}/>
            <Input/>
            <ToDoList/>
        </>
    );
}