import {DELETE_POST, LOADING, NEW_POST, POST_EDIT, POST_VIEW, PUT_IMG} from "./action";

export const initialState = {
    //  posts: {
    posts: [],
    loading: null,
    images: []
  //  id: ''
    //  }
}
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST:
            return {...state, ...action.payload}
        case POST_VIEW:
            return {...state, posts: action.payload};
        case LOADING:
            return {...state, loading: action.payload}
        case  POST_EDIT:
            return {...state, posts: action.payload}
        case DELETE_POST:
            return {...state, posts: action.payload.id}
        case PUT_IMG:
            return {...state, images:[...state.images, action.payload]}
        default:
            return state;
    }
}
