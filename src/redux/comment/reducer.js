import {POST_COMM} from "./action";

export const initialState = {
    comments: ''
}

export const commentReducer = (state = initialState, action) =>{
    switch (action.type) {
        case POST_COMM:
            return{...state, ...action.payload}
        default:
            return state;
    }
}