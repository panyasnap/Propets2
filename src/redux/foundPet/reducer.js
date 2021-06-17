import {LOAD} from "../lostPet/action";
import {NEW_FOUND, PUT_IMG, VIEW_FOUND} from "./action";
import {DELETE_POST} from "../postData/action";

export const initialState = {
    foundPost: [],
    load: null,
    foundImg: []
}

export const foundPetReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_FOUND:
            return {...state, foundPost: action.payload};
        case  LOAD:
            return {...state, load: action.payload}
        case NEW_FOUND:
            return {...state, ...action.payload}
        case DELETE_POST:
            return {...state, foundPost: action.payload.id}
        case PUT_IMG:
            return {...state, foundImg: [...state.foundImg, action.payload]}

        default:
            return state;
    }
}