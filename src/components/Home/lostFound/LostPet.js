import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {viewLostPet} from "../../../redux/lostPet/action";
import style from "../../../style.home/PostPage.module.css";
import gif from "../../../img/source.gif";
import {BsGeoAlt, BsStar} from 'react-icons/bs'
import {FavoritesLostFound} from "../../../redux/favorites/actions";
import {Carousel} from "react-bootstrap";

const LostPet = () => {
    const dispatch = useDispatch();
    const lostPost = useSelector(state => state.lostPet.lostPost.posts);
    const loading = useSelector(state => state.lostPet.load)
    useEffect(() => {
        dispatch(viewLostPet(0))
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
                {lostPost ? lostPost.map((post, index) =>
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
                                    <div>Sex: {post.sex}</div>
                                    <div className='row'>Tag: {post.tags.map((tag, index) =>
                                        (<div key={index}> {tag} </div>))}</div>
                                    <div>
                                        <BsGeoAlt/> {post.address.country}, {post.address.city}, {post.address.street},{post.address.building}
                                    </div>

                                    <div className=''>
                                        <div className='row'>
                                            <img className={`${style.imgAvatar} mt-2`} src={post.avatar}
                                                 alt={post.userLogin}/>
                                            <div className={`${style.TextH1} mt-3 ml-2`}> {post.username}</div>
                                        </div>
                                        <p className={`${style.GreenText}`}>{post.datePost}</p>
                                    </div>
                                    <div className='d-flex flex-row-reverse mb-2 '>
                                        <div onClick={() => dispatch(FavoritesLostFound(post.id))}><BsStar/></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ).reverse() : 'null'}

            </div>
        );
    }
};

export default LostPet;