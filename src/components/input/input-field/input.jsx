import React, {useState} from "react";
import {InputForm, InputField, InputButton} from "./input.styles";
import {Container} from "../../container/container.styles";
import {useDispatch, useSelector} from "react-redux";

export const Input = () => {

    const dispatch = useDispatch()
    const task = useSelector(state => state.taskList)

    const [text, setText] = useState("");

    const addTask = (task) => {
        const taskListItem = {
            task,
            id: Date.now(),
            completed: false
        }

        dispatch({type: "ADD_TASK", payload:taskListItem})


    }

    const ChangeHandler = (event) => {
        setText(event.target.value);
    }

    const SubmitHandler = (event) => {
        event.preventDefault();

        addTask(text)
        console.log(text)
    }

    const ClearHandle = () => {
        setText("")
    }

    return(
        <Container width={"1200"}>
            <InputForm onSubmit={SubmitHandler}>
                <InputField
                    placeholder={"Input your task here"}
                    onChange={ChangeHandler}
                    name={"task"}
                    required={true}
                    value={text}
                />
                <InputButton type={"submit"}>Submit</InputButton>
                <InputButton onClick={ClearHandle}>Clear</InputButton>
            </InputForm>
        </Container>
    )
}

let num = 12;

let food = num === 12 ? "ponchik" : "blinchik"