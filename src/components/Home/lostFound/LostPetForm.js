import React, {useRef, useState} from 'react';
import style from '../../../style.form/form.module.css'
import {useDispatch, useSelector} from "react-redux";
import {LostImage, newPostLostPet} from "../../../redux/lostPet/action";
import dogForm from "../../../img/Group 43.svg";
import {lostPetPage} from "../../../utils/constans";
import {Link} from "react-router-dom";

const LostPetForm = () => {
    const dispatch = useDispatch();

    const [type, setType] = useState('');
    const [sex, setSex] = useState('');
    const [breed, setBreed] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [building, setBuilding] = useState('');

    const [tags, setTags] = useState('');

    const img = useSelector(state => state.lostPet.lostPetImages)
    const fileInput = useRef()

    const createLostPost = () => {
        dispatch(newPostLostPet(type, sex, breed, country,city, street, building, img, tags));
    }
    const postImg = (files) => {
        for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            formData.append('image', files[i]);
            dispatch(LostImage(formData))
        }
    }

    return (
        <div>
            <h3>Lost your buddy? Keep calm and complete the form.</h3>
            <div className={`${style.formBorder} container`}>
                <div className='row'>
                <div className='col-xl-6 col-lg-6 col-sm-6'>
                    <div>
                        <label>Type: </label>
                        <select value={type}
                                onChange={e => setType(e.target.value)}>
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label>Sex: </label>
                        <select
                            onChange={e => setSex(e.target.value)}
                            value={sex}>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Breed: </label>
                        <input value={breed}
                               onChange={e => setBreed(e.target.value)}
                               className={`${style.inputForm}`}/>
                    </div>

                    <div>
                        <label>Distinctive features:</label>
                        <textarea
                            value={tags}
                            onChange={e => setTags(e.target.value)}
                            className={`${style.TextAria} form-control`} rows="4"
                            placeholder='blue collar with stars, no left ear, damaged tail.'/>
                    </div>
                    <div>
                        <label>Location: </label>
                        <input value={country} onChange={e => setCountry(e.target.value)}
                               className={`${style.inputForm}`} placeholder='country'/>
                        <input value={city} onChange={e => setCity(e.target.value)}
                               className={`${style.inputForm}`} placeholder='city'/>
                        <input value={street} onChange={e => setStreet(e.target.value)}
                               className={`${style.inputForm}`} placeholder='street'/>
                        <input value={building} onChange={e => setBuilding(e.target.value)}
                               className={`${style.inputForm}`} placeholder='building'/>
                        <input
                               ref={fileInput}//позволяет инпуту считать изобр
                               multiple={'multiple'}//для нескольких изображений
                               className={`${style.inputForm}`} placeholder={'photos URL'}
                               onChange={e => {
                                   let files = e.target.files;
                                   postImg(fileInput.current.files)
                               }}
                               type={'file'} required
                        />
                    </div>
                </div>
                    <div className='col-xl-6 col-lg-6 col-sm-6'><img src={dogForm} alt={''}/>
                    </div>
                </div>
                <div className='mb-5 m-3 d-flex flex-wrap-reverse'>
                    <Link to={`/home/${lostPetPage}`}> <button onClick={createLostPost}
                            className={`${style.formButton} mt-4`}>Publish
                    </button></Link>
                </div>

            </div>
        </div>
    );
};

export default LostPetForm;