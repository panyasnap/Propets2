import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {postPage} from "../../../utils/constans";
import {updatePost} from "../../../redux/postData/action";
import {useDispatch} from "react-redux";
import style from '../../../style.home/PostPage.module.css'

const UpdatePost = (props) => {
    const dispatch = useDispatch();
    const [text, setText] = useState();
    const [images, setImages] = useState();

    const updatePosts = () => {
        dispatch(updatePost(text, images, props.idPost))
        props.setIdPost(null)
    }

    return (
        <div className='container'>
            <h2 className={`${style.TextH1} ml-2`}>Update post</h2>
            <div className='border-5 border-dark'>
                <div className={`${style.imgPost} col-12 p-0`}><img className='col-12' src={props.oldImg}
                                                                    alt={'post img'}/>
                </div>
                <div className='col-12'>
            <textarea
                className={`${style.TextAria} col-12`}
                rows="10"
                value={text}
                onChange={e => setText(e.target.value)}
                defaultValue={props.oldPost}
            />
                </div>
            </div>
            <div className='row'>
                <h3 className={`${style.TextH1} ml-2`}>Img url:</h3>
                <input
                    className={`${style.inputForm} ml-2 mb-2`}
                    onChange={e => setImages(e.target.value)}
                    value={images}
                    defaultValue={props.oldImg}
                />
            </div>
            <div className='d-flex flex-row-reverse'>
                <Link to={`/home/${postPage}`}>
                    <button className={`${style.buttonText} mb-3 mr-2`} onClick={updatePosts}>update</button>
                </Link>
                <Link to={`/home/${postPage}`}>
                    <button className={`${style.buttonText} mb-3 mr-2`}>cancel</button>
                </Link>
            </div>
        </div>
    );
};

export default UpdatePost;