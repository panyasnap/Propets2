import React, {useEffect} from 'react';
import {viewPosts} from "../../../redux/postData/action";
import {useDispatch, useSelector} from "react-redux";
import style from '../../../style.home/PostPage.module.css'
import {BsStar} from 'react-icons/bs'
import gif from '../../../img/image_861510180122018437582.gif'
import {postFavorites} from "../../../redux/favorites/actions";
import {Carousel} from "react-bootstrap";

const PostPage = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postData.posts.posts)
    const loading = useSelector(state => state.postData.loading)


    useEffect(() => {
        dispatch(viewPosts(0));
    }, [])

    if (loading) {
        return (
            <div className={`${style.loadingPage} d-flex justify-content-center`}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                    <img className='col-sm-5 col-lg-5 col-xl-5 m-5 mb-1' src={gif} alt='LOADING'/>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                {posts && posts.map((post, index) =>
                    <div>
                        <div key={index} className={`${style.boxPost} mt-2 jumbotron-fluid`}>
                            <div className='container'>
                                <div className='row ml-3 justify-content-between'>
                                    <div className='row ml-2 mt-3'>
                                        <img className={`${style.imgAvatar}`} src={post.avatar}
                                             alt={post.userLogin}/>
                                        <div className={`${style.TextH1} ml-4`}> {post.username}</div>
                                    </div>
                                </div>
                                <div className='ml-5'>
                                    <p className={`${style.GreenText} ml-5`}>{post.datePost}</p>
                                </div>
                            </div>

                            <div className='ml-5 mr-5'>

                                <div>
                                    <Carousel className={`${style.imgPost} ml-5 mr-5`}>
                                        {post.images.map((url, index) => (
                                            <Carousel.Item key={index}>
                                                {url ?
                                                    <img
                                                        className='w-100 d-flex align-content-center'
                                                        src={url}
                                                        alt="Post img"
                                                    /> : 'no image'}
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                            <div className='ml-5 mt-2 mr-5 mb-3 '>
                                <p className=' ml-5 mr-5'>
                                    {post.text}
                                </p>

                            </div>
                            <div className='d-flex flex-row-reverse m-3 mb-3'>
                                <div className='mb-3' onClick={() => dispatch(postFavorites(post.id))}><BsStar/></div>
                            </div>
                        </div>

                    </div>)}
            </div>

        )
    }
};

export default PostPage;
