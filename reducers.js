import {combineReducers} from "redux";
import types from "./action-types";

function news (state = [], action) {

    switch(action.type) {
        case types.SET_NEWS: {
            return [...action.payload];
        }
        default: return state;
    }
}

function students (state = [], action) {
    switch (action.type) {
        case types.SET_STUDENT: {
            return [...action.payload];
        }
        case types.ADD_STUDENT: {
            const currentStudents = state.slice();
            currentStudents.push(action.payload);
            return [...currentStudents];
        }
        default: return state;
    }
}

export default combineReducers ({
    news,
    students
});