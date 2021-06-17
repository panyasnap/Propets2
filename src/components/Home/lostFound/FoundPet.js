import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "../../../style.home/PostPage.module.css";
import {BsGeoAlt, BsStar} from "react-icons/bs";
import {viewFoundPet} from "../../../redux/foundPet/action";
import gif from "../../../img/image_860306200308344459975.gif";
import {FavoritesLostFound} from "../../../redux/favorites/actions";
import {Carousel} from "react-bootstrap";

const FoundPet = () => {
    const dispatch = useDispatch();
    const foundPost = useSelector(state => state.foundPet.foundPost.posts);
    const loading = useSelector(state => state.foundPet.load)

    useEffect(() => {
        dispatch(viewFoundPet(0))
    }, [])

    if (loading) {
        return (
            <div className={`${style.loadingPage} d-flex justify-content-center`}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                    <img className='col-xl-5 col-lg-5 col-sm-5 m-5 mb-1' src={gif} alt='LOADING'/>
                </div>

            </div>
        )
    } else {
        return (
            <div>
                {foundPost ? foundPost.map((post, index) =>
                    <div key={index} className={`${style.boxPost} mt-2`}>
                        <div className='container'>
                            <div className='row'>
                                <Carousel className={`${style.boxPostLostImg} col-xl-6 col-lg-6 col-sm-6`}>
                                    {post.photos.map((url, index) =>
                                        <Carousel.Item key={index}>
                                            <img
                                                className='w-100 col-xl-12 col-lg-12 col-sm-12 d-flex'
                                                src={url}
                                                alt={`NO FOTO ${post.type}`}
                                            />
                                        </Carousel.Item>
                                    )}
                                </Carousel>
                                <div className='col-xl-5 col-lg-5 col-sm-5 ml-4'>
                                    <h3 className={`${style.TextH1}`}>{post.type}, {post.breed}</h3>
                                    <div className='ml-4'>Sex: {post.sex}</div>
                                    <div className='row ml-4'>Tag: {post.tags.map((tag, index) =>
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
                                    <div className='d-flex flex-row-reverse m-3 mb-1'>
                                        <div onClick={() => dispatch(FavoritesLostFound(post.id))}><BsStar/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : 'null'}
            </div>
        );
    }
};

export default FoundPet;