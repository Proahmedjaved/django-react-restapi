import {GET_MESSAGES, CREATE_MESSAGE } from "../actions/types";

const initialState = {
    msg : null,
    status: null
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_MESSAGE:
            return (state = action.payload);
        default:
            return state;

    }
}