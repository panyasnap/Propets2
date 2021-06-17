import {base_Url1} from "../../utils/constans";
import {loading} from "../postData/action";

export const PUT_USER = 'PUT_USER';
export const ERROR = 'ERROR';
export const LOGOUT = 'LOGOUT';
export const PUT_X_TOKEN = 'PUT_X_TOKEN';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_IMG = 'UPDATE_IMG';


export const putUser = (user) => ({
    type: PUT_USER,
    payload: user
})

export const error = (text) => ({
    type: ERROR,
    payload: text
})

export const logout = () => {
    return {
        type: LOGOUT
    }
}
export const putXToken = (token) => ({
    type: PUT_X_TOKEN,
    payload: token

})

export const editUser = (user) => ({
    type: UPDATE_USER,
    payload: user
})
export const userImg = (data) => ({
    type: UPDATE_IMG,
    payload:data
})
// export const userImage = (formData) => {
//     return dispatch => {
//         dispatch(loading())
//         fetch(`https://api.imgur.com/3/image`, {
//             method: 'POST',
//             headers: {
//                 Authorization: 'Client-ID 7dc2e23b740f11e',
//             },
//             body: formData
//         }).then(response => {
//             console.log(response);
//             if (response.ok) {
//                 console.log('Image uploaded to album');
//                 return response.json();
//             }
//         })
//             .then(json => {
//                 console.log(json.data.link);
//                 //setTimeout(dispatch(putAvatar(json.data.link)), 3000);
//                 dispatch(userImg(json.data.link))
//             })
//             .catch(e => {
//                 console.log(e);
//                 //TODO
//             })
//     }
// }
export const updateUserProfile = (name, phone, avatar) => {
    return (dispatch, getState) => {
        fetch(`${base_Url1}/${getState().account.user.email}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'X-Token': getState().account.x_token
            },
            mode: "cors",
            body: JSON.stringify({name: name, phone: phone, avatar:avatar})
        })
            .then(response => {
                if (response.ok) {
                    const x_token = response.headers.get('x-token')
                    localStorage.setItem('token', x_token)
                    dispatch(putXToken(x_token))
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(profile => {
                localStorage.setItem('email', profile.email);
                dispatch(editUser(profile))
            })
            .catch(e => {
                console.log(e.message);
                dispatch(error('не удалось измени ть имя...'))

            })
    }
}

export const getUser = (token, login) => {

    return dispatch => {
        fetch(`${base_Url1}/${login}/info`, {
            method: 'GET',
            headers: {
                'X-Token': token
            }
        })
            .then(response => {
                if (response.ok) {
                    const x_token = response.headers.get('X-Token')
                    localStorage.setItem('token', x_token);
                    dispatch(putXToken(x_token));
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(profile => {
                localStorage.setItem('email', profile.email);
                dispatch(putUser(profile))
            })
            .catch(e => {
                console.log(e.message);
            })


    }
}

export const registerUser = user => {
    return dispatch => {
        fetch('https://pro-pets-router.herokuapp.com/account/en/v1', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
             body: JSON.stringify(user)

        })
            .then(response => {
                if (response.ok) {
                    localStorage.setItem('token', response.headers.get('X-Token'));
                    localStorage.setItem('email', user.email)
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(profile => {
                // const token = createToken(user.login, user.password)
                // localStorage.setItem('token', token);
                dispatch(putUser(profile))
                dispatch(putXToken(profile))
            })
            .catch(e => {
                console.log(e.message);
            })
    }
}
export const loginUser = token => {
    return dispatch => {
        fetch(`${base_Url1}/login`, {
            method: 'POST',
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                console.log(response.status)
                if (response.ok) {
                    const x_token = response.headers.get('x-token')
                    localStorage.setItem('token', x_token);
                    dispatch(putXToken(x_token))
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(profile => {
                localStorage.setItem('email', profile.email)
                dispatch(putUser(profile))
            })
            .catch(e => {
                console.log(e.message);
            })
    }
}