import {load} from "../lostPet/action";
import {loading} from "../postData/action";

//export const LOAD = 'LOAD';
export const PUT_IMG = 'PUT_IMG';
export const VIEW_FOUND = 'VIEW_FOUND'
export const NEW_FOUND = 'NEW_FOUND';
export const DELETE_FOUND = 'DELETE_FOUND';

export const viewFound = (page) => ({
    type: VIEW_FOUND,
    payload: page
})

export const newFound = (type, sex, breed, country, city, street, building, photos, tags) => {
    return {
        type: NEW_FOUND,
        payload: type, sex, breed, country, city, street, building, photos, tags
    }

}
export const deletePosts = () => ({
    type: DELETE_FOUND
})

export const putFoundImg = (url) => ({
        type: PUT_IMG,
        payload: url

})
export const foundImage = (formData) => {
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
                dispatch(putFoundImg(json.data.link))
            })
            .catch(e => {
                console.log(e);
                //TODO
            })
    }
}
export const deletePostFound = (id) => {
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
                dispatch(deletePosts(data))
            })
            .catch(e => {
                console.log(e);
            })
    }
}
export const newPostFoundPet = (type, sex, breed, country, city, street, building, imgFounds, tags) => {
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
            photos: imgFounds,
            tags: [tags]
        }

        fetch(`https://pro-pets-router.herokuapp.com/lostfound/en/v1/found/${getState().account.user.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': getState().account.x_token
            }, body: JSON.stringify(data)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                dispatch(newFound(data))
            })
            .catch(e => {
                console.log(e);
            })
    }
}
export const viewFoundPet = (page) => {
    return (dispatch, getState) => {
        dispatch(load(true))
        fetch(`https://pro-pets-router.herokuapp.com/lostfound/en/v1/founds?currentPage=${page}`, {
            method: 'GET',
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
                //   console.log(data)
                dispatch(viewFound(data))
                dispatch(load(false))
            })

    }
}