import {CREATE_MESSAGE, GET_ERRORS} from "./types";

// CREATE MESSAGE

export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}

// Return Errors
export const returnError = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status}
    }
}