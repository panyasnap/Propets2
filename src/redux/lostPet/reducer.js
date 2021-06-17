import {DELETE_LOST, LOAD, NEW_LOST, PUT_IMG, VIEW_LOST} from "./action";

export const initialState = {
    lostPost: [],
    load: null,
    lostPetImages: []
}

export const lostPetReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_LOST:
            return {...state, lostPost: action.payload};
        case  LOAD:
            return {...state, load: action.payload}
        case NEW_LOST:
            return {...state, ...action.payload}
        case DELETE_LOST:
            return {...state, lostPost: action.payload.id}
        case PUT_IMG:
            return{...state, lostPetImages:[...state.lostPetImages, action.payload]}
        default:
            return state;
    }
}