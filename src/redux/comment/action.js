export const POST_COMM = 'POST_COMM'

export const comment =(text)=>({
    type: POST_COMM,
    payload:text
})

export const postComment = (text, id) => {
    return(dispatch, getState) => {
        const data = {text, username: getState().account.user.name, avatar:getState().account.user.avatar}
        fetch(`https://pro-pets-router.herokuapp.com/message/en/v1/${getState().account.user.email}/post/${id}/comment`,{
            method: 'POST',
            headers:{
                'X-Token': getState().account.x_token
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    console.log(response.status)
                    return response.json();
                }
            })
            .then(data => {
                console.log(data)
                dispatch(comment(data))
            })
            .catch(e => {
                console.log(e);
            })
    }
}