export const ACTIV_VIEW = ' ACTIV_VIEW';
export const LOADING = 'LOADING';
export const POST_EDIT ='POST_EDIT';
export const activities = (data) => ({
    type: ACTIV_VIEW,
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

export const updateLostFound = (type, sex, breed, tags, photos, country, city, street, building, id) => {
    return (dispatch, getState) => {
        const data = {
            type,
            sex,
            breed,
            tags: [tags],
            photos: [photos],
            address: {
                country,
                city,
                street,
                building
            },
            location: {
                // lat: lat,
                // lon: 34.795830
            }
        }
        fetch(`https://pro-pets-router.herokuapp.com/lostfound/en/v1/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': getState().account.x_token
            },
            body: JSON.stringify(data)
        }).then(response => {
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

export const getActivities = () => {
    return (dispatch, getState) => {
        dispatch(loading(true))
        fetch(`https://pro-pets-router.herokuapp.com/postdata/en/v1/${getState().account.user.email}/activities`, {
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
                //  console.log(data)
                dispatch(activities(data))
                // dispatch(newPost(posts, getState().token))
                dispatch(loading(false))
            })
            .catch(e => {
                console.log(e);
            })
    }
}