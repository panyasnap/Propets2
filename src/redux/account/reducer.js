import {ERROR, LOGOUT, PUT_USER, PUT_X_TOKEN, UPDATE_IMG, UPDATE_USER} from "./action";

const initialState = {
    x_token: "",
    user: {
        avatar: '',
        email: "",
        name: "",
        phone: "",
        roles: [],
    }
};

export const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_X_TOKEN:
            return {...state, x_token: action.payload}
        case PUT_USER:
            return {...state, user: {...action.payload}}
        case ERROR:
            return {...state, message: action.payload}
        case UPDATE_USER:
            return {...state, user: {...action.payload}};
        case LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            return {};
        case UPDATE_IMG:
            return {...state, avatar: action.payload}
        default:
            return state
    }
}