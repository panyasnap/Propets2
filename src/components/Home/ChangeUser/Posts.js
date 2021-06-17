import React from 'react';
import style from "../../../style.home/PostPage.module.css";
import {deletePost} from "../../../redux/postData/action";
import {BsPencil, BsStar, BsTrash} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {postFavorites} from "../../../redux/favorites/actions";
import {Carousel} from "react-bootstrap";

const Posts = (props) => {
    const dispatch = useDispatch();
    const activPost = useSelector(state => state.activities.activPost.otherPosts);

    return (
        <div>
            {activPost ? activPost.map((post, index) =>
                <div key={index} className={`${style.boxPost} mt-2 jumbotron-fluid`}>
                    <div className='container'>
                        <div className='row ml-3 justify-content-between'>
                            <div className='row'>
                                <img className={`${style.imgAvatar} mt-2`} src={post.avatar}
                                     alt={post.userLogin}/>
                                <div className={`${style.TextH1} mt-3 ml-2`}> {post.username}</div>
                            </div>
                        </div>
                        <p className={`${style.GreenText}`}>{post.datePost}</p>
                    </div>
                    <div className='ml-5 mt-2 mr-2 mb-3 '>
                        {post.text}
                    </div>
                    <div className='col-12 '>
                        <div> <Carousel className={`${style.imgPost}`} setInterval={null}>
                            {post.images.map((url, index) => (
                                <Carousel.Item key={index} >
                                    <div >
                                        <img
                                            className={` w-100`}
                                            src={url}
                                            alt=" "
                                        />
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        </div>
                    </div>
                    <div className='d-flex flex-row-reverse m-3 mb-1'>
                        <div className='ml-3' onClick={() => dispatch(deletePost(post.id))}><BsTrash/></div>
                        <div onClick={() => dispatch(postFavorites(post.id))}><BsStar/></div>
                        <div className='mr-3' onClick={() => props.isEditPost(post.id, post.text, post.images)}>
                            <BsPencil/></div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Posts;