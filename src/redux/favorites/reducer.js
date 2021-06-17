import {DEL_FAV, LOADING, POST_FAVOR, VIEW_FAV} from "./actions";

export const initialState = {
    favorPost: [],
    loading: null,
}
export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_FAVOR:
            return {...state, favorPost: action.payload}
        case VIEW_FAV:
            return {...state, favorPost: action.payload}
        case DEL_FAV:
            return {...state, favorPost: action.payload.id}
        case  LOADING:
            return {...state, loading: action.payload}
        default:
            return state;

    }
}