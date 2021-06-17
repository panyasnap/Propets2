export const NEW_POST = 'NEW_POST';
export const POST_VIEW = 'POST_VIEW';
export const LOADING = 'LOADING';
export const POST_EDIT = ' POST_EDIT';
export const DELETE_POST = 'DELETE_POST';
export const  PUT_IMG =' PUT_IMG';


export const newPost = (data) => ({
    type: NEW_POST,
    payload: data
})
export const viewPostPage = (data) => ({
    type: POST_VIEW,
    payload: data
})
export const loading = state => {
    return {
        type: LOADING,
        payload: state
    }
}
export const editPost = (text, images) => ({
    type: POST_EDIT,
    payload: text, images
})

export const deletePosts = () => ({
    type: DELETE_POST
})

export const putImg =(url)=>({
    type: PUT_IMG,
    payload: url
})
export const userImage = (formData) => {
    return dispatch => {
        dispatch(loading())
        fetch(`https://api.imgur.com/3/image`, {
            method: 'POST',
            headers: {
                Authorization: 'Client-ID 7dc2e23b740f11e',
            },
            body: formData
        }).then(response => {
            console.log(response);
            if (response.ok) {
                console.log('Image uploaded to album');
                return response.json();
            }
        })
            .then(json => {
                console.log(json.data.link);
                //setTimeout(dispatch(putAvatar(json.data.link)), 3000);
                dispatch(putImg(json.data.link))
            })
            .catch(e => {
                console.log(e);
                //TODO
            })
    }
}

export const deletePost = (id) => {
    return (dispatch, getState) => {
        fetch(`https://propetsapp.herokuapp.com/message/en/v1/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': getState().account.x_token
            }
        })
            .then(response => {
                //  console.log(response.status)
                return response.json();

            })
            .then(data => {
                //  console.log(data)
                dispatch(deletePost(data))
            })
            .catch(e => {
                console.log(e);
            })
    }
}
export const updatePost = (text, images, id) => {
    return (dispatch, getState) => {
        const data = {
            username: getState().account.user.name,
            avatar: getState().account.user.avatar,
            text,
            images: [images]
        }
        console.log(data)
        fetch(`https://propetsapp.herokuapp.com/message/en/v1/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': getState().account.x_token
            },
            body: JSON.stringify(data)
        })
            .then(response => {
              //  console.log(response.status)
                return response.json();

            })
            .then(data => {
               // console.log(data)
                dispatch(editPost(data))
            })
            .catch(e => {
                console.log(e);
            })
    }

}

// https://propetsapp.herokuapp.com/message/en/v1/view/?currentPage=${page}

export const viewPosts = (page) => {
    return (dispatch, getState) => {
        dispatch(loading(true))
        fetch(`https://propetsapp.herokuapp.com/message/en/v1/view/?currentPage=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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
                //  console.log(data)
                dispatch(viewPostPage(data))
                // dispatch(newPost(posts, getState().token))
                dispatch(loading(false))

            })
            .catch(e => {
                console.log(e);


            })
    }
}
export const createNewPost = (text, img1) => {
    return (dispatch, getState) => {
        const data = {
            text,
            images: img1,
            username: getState().account.user.name,
            avatar: getState().account.user.avatar
        }
        fetch(`https://propetsapp.herokuapp.com/message/en/v1/${getState().account.user.email}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Token': getState().account.x_token
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                //console.log(response.status)
                // return response.json();
                // console.log(text)
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                dispatch(newPost(data))

            })
            .catch(e => {
                console.log(e);


            })
    }
}
