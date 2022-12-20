import React, {useState} from "react";
import {ToDoListItemButton, ToDoListItemText, ToDoListItemWrap} from "./to-do-list-item.styles";
import {useDispatch, useSelector} from "react-redux";

export const ToDoListItem = (props) => {

    const [task, setTask] = useState(props.task.task);

    const dispatch = useDispatch();

    const taskList = useSelector(state => state.taskList)

    const onEditHandler = (event) => {
        setTask(event.target.value);
        dispatch({type: "Edit_TASK", payload: {id: props.task.id, task: event.target.value}})
    }

    const color = props.task.completed ? "#ababab" : "#000000";

    const HandleRemove = () => {
        dispatch({type: "REMOVE_TASK", payload: props.task.id})
    }

    const HandleComplete = () => {
        dispatch({type: "COMPLETE_TASK", payload: props.task.id})
    }

    return(
        <ToDoListItemWrap color={color}>
            <ToDoListItemText color={color} value={task} onChange={onEditHandler}></ToDoListItemText>
            <ToDoListItemButton color={color} onClick={HandleComplete}>Done</ToDoListItemButton>
            <ToDoListItemButton color={color} onClick={HandleRemove}>Delete</ToDoListItemButton>
        </ToDoListItemWrap>
    );
}