import {ACTIV_VIEW, LOADING, POST_EDIT} from "./action";


export const initialState = {
    activPost: [],
    loading: null,
}
export const activitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIV_VIEW:
            return {...state, activPost: action.payload}
        case LOADING:
            return {...state, loading: action.payload}
        case  POST_EDIT:
            return {...state, activPost: action.payload}
        default:
            return state;

    }
}