import React, {useRef, useState} from 'react';
import style from '../../../style.home/PostPage.module.css'
import {FaPaw} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {createNewPost, userImage} from "../../../redux/postData/action";
import {Link} from "react-router-dom";
import {postPage} from "../../../utils/constans";

const AddNew = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const fileInput = useRef()
    const img1 = useSelector(state => state.postData.images)

    const createPost = () => {
        dispatch(createNewPost(text, img1));
    }
    const postImg = (files) => {
        for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            formData.append('image', files[i]);
            dispatch(userImage(formData))
        }
    }

    return (
        <div className={`${style.boxPost} container`}>
            <p className={`${style.TextH1} col-sm-12 col-lg-12 col-xl-12`}>Your new post! Simply text, add photos and publish.</p>

            <div className='row ml-2 '>
                <div className='d-flex flex-column col-sm-2 col-lg-2 col-xl-2'>
                    <label>Text:</label>
                    <label className={`${style.GreenText}`}>up to 1500 char</label>
                </div>
                <div className='col-sm-10 col-lg-10 col-xl-10'>
                    <textarea className={`${style.TextAria} form-control col-sm-12 col-lg-12 col-xl-12`} rows="16"
                              placeholder={'New post'}
                              onChange={e => setText(e.target.value)}
                              value={text}
                    >
                    </textarea>
                </div>
                <div>
                    <p className={`${style.TextH1} mt-3`}>Добавить изображение</p>
                    <input

                        ref={fileInput}//позволяет инпуту считать изобр
                        multiple={'multiple'}//для нескольких изображений
                        className={`${style.inputForm} col-sm-11 col-lg-11 col-xl-11 m-2`}
                        onChange={e => {
                            let files = e.target.files;
                            postImg(fileInput.current.files)
                        }}
                        type={'file'} required
                    />
                </div>

            </div>
            <div className='d-flex flex-row-reverse'>
                <Link to={`/home/${postPage}`}>
                    <button className={`${style.buttonText} mt-5`} onClick={createPost}><FaPaw/> Publish</button>
                </Link>
            </div>
        </div>
    );
};

export default AddNew;