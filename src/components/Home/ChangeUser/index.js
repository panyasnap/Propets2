import React, {useState} from 'react';
import style from "../../../style/Modal.module.css";
import Activities from "./Activities";
import ChangeUserPage from "./ChangeUserPage";

const Index = () => {
    const [changeUser, setChangeUser] = useState(true);


    const ChangeUserInput = () => {
        setChangeUser(true)
    }
    const ActivitiesInput = () => {
        setChangeUser(false)
    }

    return (
        <div className={`container mt-5`}>
            <div>Your profile. Change, edit and manage your data.</div>
            <div className='row mt-5 mb-5'>

                <button onClick={ChangeUserInput} className={`${style.buttonSignUp} col-6`}>My profile</button>
            <button onClick={ActivitiesInput} className={`${style.buttonSignIn} col-6`}>Activities</button>
            </div>
            <div>{changeUser ? <ChangeUserPage/> : <Activities/>}</div>
        </div>
    );

};

export default Index