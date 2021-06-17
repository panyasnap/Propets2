import React, {useState} from 'react';
import style from "../../../style.home/PostPage.module.css";
import UpdatePost from "./UpdatePost";
import LostFound from "./LostFound";
import Posts from "./Posts";
import UpdateLostFound from "./UpdateLostFound";

const ActivPost = () => {
    const [oldPost, setOldPost] = useState()
    const [oldImg, setOldImg] = useState()
    const [idPost, setIdPost] = useState(null)
    const [updatePost, setUpdatePost] = useState(true);

    const [oldType, setOldType] = useState();
    const [oldSex, setOldSex] = useState();
    const [oldBreed, setOldBreed] = useState();
    const [oldCountry, setOldCountry] = useState();
    const [oldCity, setOldCity] = useState();
    const [oldStreet, setOldStreet] = useState();
    const [oldBuilding, setOldBuilding] = useState();
    const [oldPhotos, setOldPhotos] = useState();
    const [oldTags, setOldTags] = useState();


    const isEditPost = (id, oldText, oldImg) => {
        setIdPost(id)
        setOldPost(oldText)
        setOldImg(oldImg)
    }

    const isEditLostFound = (id, oldType, oldSex, oldBreed,oldTags, oldPhotos, oldCountry, oldCity, oldStreet, oldBuilding) => {
        setIdPost(id)
        setOldType(oldType)
        setOldSex(oldSex)
        setOldBreed(oldBreed)
        setOldTags(oldTags)
        setOldPhotos(oldPhotos)
        setOldCountry(oldCountry)
        setOldCity(oldCity)
        setOldStreet(oldStreet)
        setOldBuilding(oldBuilding)
        setUpdatePost(false)
    }
    if (idPost) {
        return (
            <div className={`${style.boxPost} mb-3`}>
                {updatePost ?
                    <UpdatePost oldPost={oldPost} oldImg={oldImg} idPost={idPost}
                                setIdPost={setIdPost}/>
                    : <UpdateLostFound idPost={idPost} setIdPost={setIdPost} oldType={oldType} oldSex={oldSex} oldBreed={oldBreed} oldCountry={oldCountry}
                                       oldCity={oldCity} oldStreet={oldStreet} oldBuilding={oldBuilding} oldPhotos={oldPhotos} oldTags={oldTags}/>}
            </div>
        )
    } else {
        return (
            <div>
                <LostFound isEditLostFound={isEditLostFound}/>
                <Posts isEditPost={isEditPost}/>
            </div>
        );
    }
};
export default ActivPost;