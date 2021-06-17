import {loading} from "../postData/action";
export const PUT_IMG = 'PUT_IMG';
export const LOAD = 'LOAD';
export const NEW_LOST = 'NEW_LOST';
export const DELETE_LOST = 'DELETE_LOST';

export const VIEW_LOST = 'VIEW_LOST'

export const viewLost = (page) => ({
    type: VIEW_LOST,
    payload: page
})
export const load = state => {
    return {
        type: LOAD,
        payload: state
    }
}

export const putLostImg =(url)=>({
    type: PUT_IMG,
    payload: url
})
export const newLost = (type, sex, breed, country, city, street, building, photos, tags) => {
    return {
        type: NEW_LOST,
        payload: type, sex, breed, country, city, street, building,  photos, tags
    }

}
export const deleteLost = () => ({
    type: DELETE_LOST
})
export const LostImage = (formData) => {
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
                dispatch(putLostImg(json.data.link))
            })
            .catch(e => {
                console.log(e);
                //TODO
            })
    }
}

export const deletePostLost = (id) => {
    return (dispatch, getState) => {
        fetch(`https://propetsapp.herokuapp.com/lostfound/en/v1/${id}`, {
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
                dispatch(deleteLost(data))
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const newPostLostPet = (type, sex, breed, country, city, street, building, img, tags) => {

    return (dispatch, getState) => {
        const data = {
            type,
            sex,
            breed,
            username: getState().account.user.name,
            avatar: getState().account.user.avatar,
            address: {
                country,
                city,
                street,
                building
            },
            location: {
                // lat: lat,
                // lon: 34.795830
            },
            photos: img,
            tags: [tags]
        }
        //console.log(data)
        fetch(`https://pro-pets-router.herokuapp.com/lostfound/en/v1/lost/${getState().account.user.email}`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'X-Token': getState().account.x_token
            }, body: JSON.stringify(data)
        })
            .then(response => {
               // console.log(response.status)
                return response.json();
            })
            .then(data => {
               console.log(data)
                dispatch(newLost(data))

            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const viewLostPet = (page) => {
    return (dispatch, getState) => {
        dispatch(load(true))
        fetch(`https://pro-pets-router.herokuapp.com/lostfound/en/v1/losts?currentPage=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': getState().account.x_token
            }
        })
            .then(response => {
                // console.log(response.status)
                return response.json();

            })
            .then(data => {
                // console.log(data)
                dispatch(viewLost(data))
                dispatch(load(false))
            })

    }
}