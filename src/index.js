import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore} from "redux";

const defaultState = {
    taskList: []
}

export const ADD_TASK = "ADD_TASK"
export const REMOVE_TASK = "REMOVE_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"
export const EDIT_TASK = "EDIT_TASK"


const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const reducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_TASK :
            return {...state, taskList: [...state.taskList, action.payload]}
        case REMOVE_TASK :
            return {...state, taskList: [...state.taskList.filter(task => task.id !== action.payload)]}
        case COMPLETE_TASK : {
            const index = state.taskList.findIndex(todo => todo.id === action.payload)
            const newArray = [...state.taskList];
            newArray[index].completed = !newArray[index].completed
            return {
                ...state, taskList: newArray
            }
        }
        case EDIT_TASK : {
            const index = state.taskList.findIndex(todo => todo.id === action.payload.id)
            const newArray = [...state.taskList];
            newArray[index].task = action.payload.task
            return {
                ...state, taskList: newArray
            }
        }
        default: return state
    }
}

const store = createStore(reducer, loadFromLocalStorage(), composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
