import React, {useState} from "react";
import {Container} from "../container/container.styles";
import {FlexWrap, ToDoListWrap} from "./to-do-list.styles";
import {Header} from "../header/header";
import {useSelector} from "react-redux";
import {ToDoListItem} from "./to-do-list-item/to-do-list-item";
import {InputButton} from "../input/input-field/input.styles";

export const ToDoList = () => {

    const taskList = useSelector(state => state.taskList)

    const [display, setDisplay] = useState("ALL");

    const DisplayAllTasks = () => {
        setDisplay("ALL");
    }

    const DisplayTBCTasks = () => {
        setDisplay("TBC");
    }

    const DisplayCompletedTasks = () => {
        setDisplay("COMPLETED");
    }

    switch (display){
        case "ALL":{ return(
            <Container width={"1200"}>
                <Header text={"Your List"}/>
                <FlexWrap>
                    <InputButton onClick={DisplayAllTasks}>All</InputButton>
                    <InputButton onClick={DisplayTBCTasks}>To be completed</InputButton>
                    <InputButton onClick={DisplayCompletedTasks}>Completed</InputButton>
                </FlexWrap>
                <ToDoListWrap>
                    {taskList.length > 0 ? (
                        taskList.map((taskListItem =>(
                            <ToDoListItem task={taskListItem} key={taskListItem.id}/>
                        )))
                    ) : null}
                </ToDoListWrap>
            </Container>
        );}
        case "TBC":{
            return(
                <Container width={"1200"}>
                    <Header text={"Your List"}/>
                    <FlexWrap>
                        <InputButton onClick={DisplayAllTasks}>All</InputButton>
                        <InputButton onClick={DisplayTBCTasks}>To be completed</InputButton>
                        <InputButton onClick={DisplayCompletedTasks}>Completed</InputButton>
                    </FlexWrap>
                    <ToDoListWrap>
                        {taskList.length > 0 ? (
                            taskList.map((taskListItem => !taskListItem.completed ? (
                                <ToDoListItem task={taskListItem} key={taskListItem.id}/>
                            ) : null))
                        ) : null}
                    </ToDoListWrap>
                </Container>
            );
        }
        case "COMPLETED":{
            return(
                <Container width={"1200"}>
                    <Header text={"Your List"}/>
                    <FlexWrap>
                        <InputButton onClick={DisplayAllTasks}>All</InputButton>
                        <InputButton onClick={DisplayTBCTasks}>To be completed</InputButton>
                        <InputButton onClick={DisplayCompletedTasks}>Completed</InputButton>
                    </FlexWrap>
                    <ToDoListWrap>
                        {taskList.length > 0 ? (
                            taskList.map((taskListItem => taskListItem.completed ? (
                                <ToDoListItem task={taskListItem} key={taskListItem.id}/>
                            ) : null))
                        ) : null}
                    </ToDoListWrap>
                </Container>
            );
        }
    }
}