import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "../../style.home/PostPage.module.css";
import {BsGeoAlt} from "react-icons/bs";
import {getFavorites, removeFavLostFound, removeFavPost} from "../../redux/favorites/actions";
import {AiFillStar} from "react-icons/ai";
import {Carousel} from "react-bootstrap";

const Favorites = () => {
    const dispatch = useDispatch();
    const favPostLostFound = useSelector(state => state.favorites.favorPost.lostFoundPosts);
    const favPost = useSelector(state => state.favorites.favorPost.otherPosts);
    const loading = useSelector(state => state.favorites.loading);

    useEffect(() => {
        dispatch(getFavorites(0))
    }, [])


    if (loading) {
        return (
            <div className={`${style.loadingPage}`}>
                LOADING..
            </div>
        )
    } else {
        return (
            <div>
                {favPostLostFound ? favPostLostFound.map((post, index) =>
                    <div key={index} className={`${style.boxPost} mt-2`}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>{post.photos.map((url, index) =>
                                    (<img key={index}
                                          className='col-12'
                                          src={url}
                                          alt={post.type}/>))}
                                </div>
                                <div className='col-6'>
                                    <h3 className={`${style.TextH1}`}>{post.type}, {post.breed}</h3>
                                    <div>Sex: {post.sex}</div>
                                    <div className='row'>Tag: {post.tags.map((tag, index) =>
                                        (<div key={index}> {tag} </div>))}</div>
                                    <div>
                                        <BsGeoAlt/> {post.address.country}, {post.address.city}, {post.address.street},{post.address.building}
                                    </div>

                                    <div className='mb-3'>
                                        <div className='row'>
                                            <img className={`${style.imgAvatar} mt-2`} src={post.avatar}
                                                 alt={post.userLogin}/>
                                            <div className={`${style.TextH1} mt-3 ml-2`}> {post.username}</div>
                                        </div>
                                        <p className={`${style.GreenText}`}>{post.datePost}</p>
                                    </div>
                                    <div className='d-flex m-3 flex-row-reverse'
                                         onClick={() => dispatch(removeFavLostFound(post.id))}><AiFillStar/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : 'Избранных постов Lost & Found нет'}

                {favPost ? favPost.map((post, index) =>
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
                        <div className='col-12'>
                            <Carousel className={`${style.imgPost}`} setInterval={null}>
                                {post.images.map((url, index) => (
                                    <Carousel.Item key={index} >
                                        <img
                                            className={`w-100`}
                                            src={url}
                                            alt="Post img"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <div className='d-flex flex-row-reverse m-3 mb-1'>
                            <div onClick={() => dispatch(removeFavPost(post.id))}><AiFillStar/></div>
                        </div>
                    </div>
                ) : <div className={`${style.loadingPage}`}>Избранных постов нет</div>}
            </div>
        )
    }
};


export default Favorites;