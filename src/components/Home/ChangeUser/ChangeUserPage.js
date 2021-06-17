import React, {useState} from 'react';
import style from "../../../style/Modal.module.css";
import styleButton from '../../../style.home/homeMain.module.css'
import {AiOutlineSave} from 'react-icons/ai'
import {useDispatch, useSelector} from "react-redux";
import {updateUserProfile} from "../../../redux/account/action";
import {Link} from "react-router-dom";
import {postPage} from "../../../utils/constans";

const ChangeUserPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.account.user);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');

    const clearInput = () => {
        setName('');
        setAvatar('');
        setPhone('');

    }
    const handleClickUpdate = () => {
        dispatch(updateUserProfile(name || user.name, phone || user.phone,  avatar|| user.avatar));
        clearInput();

    }
    return (
        <div>
            <div className={`${styleButton.homeBorder} p-4 container `}>
                <div className='row '>
                    <div className='col-6 mt-5 ml-5'>
                        <div>Email: {user.email}</div>
                        <div>Name: {user.name}  </div>
                        <div>Phone: {user.phone}</div>
                    </div>
                    <img className='col-4 ml-4' src={user.avatar} alt={user.name}/>
                </div>
                <div className='mt-4'>
                    <h2>Edit User</h2>
                    <label className='ml-4'>Name: </label>
                    <input
                        className={`${style.inputForm} ml-3 mb-1`}
                        onChange={e => setName(e.target.value)}
                        value={name}
                        type='text'
                    />
                </div>

                <div className='mb-1 ml-4'>
                    <label>Phone: </label>
                    <input
                        className={`${style.inputForm} ml-3 `}
                        onChange={e => setPhone(e.target.value.trim())}
                        value={phone}
                        type='number'
                    />
                </div>
                <div className='mb-1'>
                    <label className='ml-4'>Avatar: </label>
                    <input
                        onChange={e => setAvatar(e.target.value.trim())}
                        value={avatar}
                        className={`${style.inputForm} ml-3`}
                    />
                </div>
            </div>
            <div className='d-flex flex-row-reverse mt-5 mb-5'>
                <Link to={`/home/${postPage}`}>
                    <button className={`${styleButton.ButtonCancel}`}>Cancel</button>
                </Link>
                <Link to={`/home/${postPage}`}>
                    <button className={`${styleButton.ButtonSave}`} onClick={handleClickUpdate}>
                        <AiOutlineSave/> Save
                        change
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default ChangeUserPage;
