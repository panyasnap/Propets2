import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import style from "../../../style.form/form.module.css";
import {updateLostFound} from "../../../redux/activities/action";
import {Link} from "react-router-dom";
import {postPage} from "../../../utils/constans";

const UpdateLostFound = (props) => {
    const dispatch = useDispatch();
    const [type, setType] = useState('');
    const [sex, setSex] = useState('');
    const [breed, setBreed] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [building, setBuilding] = useState('');
    const [photos, setPhotos] = useState('');
    const [tags, setTags] = useState('');

    const updateLostPost = () => {
        dispatch(updateLostFound(type, sex, breed, tags, photos, country, city, street, building, props.idPost));
        props.setIdPost(null)
        console.log(props.oldBreed)
        console.log(props.oldCity)
        console.log(props.oldType)
        console.log(props.oldCountry)
    }


    return (
        <div>
            <h3>Lost your buddy? Keep calm and complete the form.</h3>
            <div className={`${style.formBorder}`}>
                <div className='col-6 '>
                    <div>
                        <label>Type: </label>
                        <select value={type}
                                defaultValue={props.oldType}
                                onChange={e => setType(e.target.value)}>
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label>Sex: </label>
                        <select
                            defaultValue={props.oldSex}
                            onChange={e => setSex(e.target.value)}
                            value={sex}>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Breed: </label>
                        <input value={breed}
                               defaultValue={props.oldBreed}
                               onChange={e => setBreed(e.target.value)}
                               className={`${style.inputForm}`}/>
                    </div>

                    <div>
                        <label>Distinctive features:</label>
                        <textarea
                            value={tags}
                            defaultValue={props.oldTags}
                            onChange={e => setTags(e.target.value)}
                            className={`${style.TextAria} form-control`} rows="4"
                            // placeholder='blue collar with stars, no left ear, damaged tail.'
                        />
                    </div>
                    <div>
                        <label>Location: </label>
                        <input value={country} onChange={e => setCountry(e.target.value)}
                               className={`${style.inputForm}`}
                               // placeholder='country'
                               defaultValue={props.oldCountry}
                        />
                        <input value={city} onChange={e => setCity(e.target.value)}
                               className={`${style.inputForm}`} placeholder='city'
                               defaultValue={props.oldCity}/>
                        <input value={street} onChange={e => setStreet(e.target.value)}
                               className={`${style.inputForm}`} placeholder='street'
                               defaultValue={props.oldStreet}/>
                        <input value={building} onChange={e => setBuilding(e.target.value)}
                               className={`${style.inputForm}`} placeholder='building'
                               defaultValue={props.oldBuilding}/>
                        <input value={photos} onChange={e => setPhotos(e.target.value)}
                               className={`${style.inputForm}`} placeholder={'photos URL'}
                               defaultValue={props.oldPhotos}/>
                    </div>
                </div>
                <div className='mb-5 m-3 d-flex flex-wrap-reverse'>
                    <Link to={`/home/${postPage}`}> <button onClick={updateLostPost}
                            className={`${style.formButton} mt-4`}>Update
                    </button></Link>

                </div>

            </div>
        </div>
    );
};
export default UpdateLostFound;