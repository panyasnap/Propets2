export const POST_FAVOR = 'POST_FAVOR';
export const VIEW_FAV = ' VIEW_FAV';
export const DEL_FAV = ' DEL_FAV';
export const LOADING = 'LOADING';

export const favorites = (id) => ({
    type: POST_FAVOR,
    payload: id
})
export const viewFavorites = (id) => ({
    type: VIEW_FAV,
    payload: id
})

export const deleteFav = () => ({
    type: DEL_FAV,
})

export const loading = state => {
    return {
        type: LOADING,
        payload: state
    }
}
export const getFavorites = () => {
    return (dispatch, getState) => {
        dispatch(loading(true))
        fetch(`https://pro-pets-router.herokuapp.com/postdata/en/v1/${getState().account.user.email}/favorites`, {
            method: 'GET',
            headers: {
                'X-Token': getState().account.x_token
            }
        })
            .then(response => {
                if (response.ok) {
                    // console.log(response.status)
                    return response.json();
                }
            })
            .then(data => {
                //console.log(data)
                dispatch(viewFavorites(data))
                // dispatch(newPost(posts, getState().token))
                dispatch(loading(false))

            })
            .catch(e => {
                console.log(e);
            })
    }
}
export const postFavorites = (id) => {
    return (dispatch, getState) => {
        fetch(`https://pro-pets-router.herokuapp.com/account/en/v1/${getState().account.user.email}/favorite/${id}`, {
            method: 'PUT',
            headers: {
                'X-Token': getState().account.x_token,
                'X-ServiceName': 'message'
            },
            // body: JSON.stringify([id])
        })
            .then(response => {
                if (response.ok) {
                    // console.log(response.status)
                    return response.json();
                }
            })
            .then(data => {
                // console.log(data)
                dispatch(favorites(data))
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const FavoritesLostFound = (id) => {
    return (dispatch, getState) => {
        fetch(`https://pro-pets-router.herokuapp.com/account/en/v1/${getState().account.user.email}/favorite/${id}`, {
            method: 'PUT',
            headers: {
                'X-Token': getState().account.x_token,
                'X-ServiceName': 'lostfound'
            },
            // body: JSON.stringify([id])
        })
            .then(response => {
                if (response.ok) {
                    // console.log(response.status)
                    return response.json();
                }
            })
            .then(data => {
                //console.log(data)
                dispatch(favorites(data))
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const removeFavLostFound = (id) => {
    return (dispatch, getState) => {
        fetch(`https://pro-pets-router.herokuapp.com/account/en/v1/${getState().account.user.email}/favorite/${id}`, {
            method: 'DELETE',
            headers: {
                'X-Token': getState().account.x_token,
                'X-ServiceName': 'lostfound'
            },
            // body: JSON.stringify([id])
        })
            .then(response => {
                if (response.ok) {
                    console.log(response.status)
                    return response.json();
                }
            })
           // .then(data => {
              //  console.log(data)
                dispatch(deleteFav())
           // })
            .catch(e => {
                console.log(e);
            })
    }
}
export const removeFavPost = (id) => {
    return (dispatch, getState) => {
        fetch(`https://pro-pets-router.herokuapp.com/account/en/v1/${getState().account.user.email}/favorite/${id}`, {
            method: 'DELETE',
            headers: {
                'X-Token': getState().account.x_token,
                'X-ServiceName': 'message'
            },
            // body: JSON.stringify([id])
        })
            .then(response => {
                if (response.ok) {
                    console.log(response.status)
                    return response.json();
                }
            })
            .then(data => {
              //  console.log(data)
                dispatch(deleteFav())
            })
            .catch(e => {
                console.log(e);
            })
    }
}