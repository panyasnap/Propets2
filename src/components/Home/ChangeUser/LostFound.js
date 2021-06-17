import React from 'react';
import style from "../../../style.home/PostPage.module.css";
import {BsGeoAlt, BsPencil, BsStar, BsTrash} from "react-icons/bs";
import {deletePostLost} from "../../../redux/lostPet/action";
import {postFavorites} from "../../../redux/favorites/actions";
import {useDispatch, useSelector} from "react-redux";

const LostFound = (props) => {
    const dispatch = useDispatch();
    const activPostLostFound = useSelector(state => state.activities.activPost.lostFoundPosts);
    return (
        <div>
            {activPostLostFound ? activPostLostFound.map((post, index) =>
                <div key={index} className={`${style.boxPost} mt-2`}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>{post.photos.map((url, index) =>
                                (<img key={index}
                                      className='col-12' src={url} alt={post.type}/>))}
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
                                <div className='d-flex flex-row-reverse m-3 mb-1'>
                                    <div className='ml-3' onClick={() => dispatch(deletePostLost(post.id))}>
                                        <BsTrash/></div>
                                    <div onClick={() => dispatch(postFavorites(post.id))}><BsStar/></div>
                                    <div className='mr-3' onClick={()=> props.isEditLostFound(post.id, post.type, post.sex, post.breed, post.tags, post.photos, post.address.country, post.address.city, post.address.street, post.address.building)}><BsPencil/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default LostFound;