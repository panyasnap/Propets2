import React, {useState} from 'react';
import Group from "../../img/Group 2.svg";
import style from "../../style/Modal.module.css";
import {FaFacebook} from "react-icons/fa";
import Login from "./Login";
import Register from "./Register";

const Index = () => {
    const [registerPage, setRegisterPage] = useState(true)
    const registerInput = () => {
        setRegisterPage(false)
    }
    const loginInput = () => {
        setRegisterPage(true)
    }
    return (
        <div>
            <div className='container'>
                <img src={Group} alt='group'/>
                <div className='row'>
                    <h3 className={`${style.textH1Input} col-sm-8 col-lg-8 col-xl-8`}>Welcome! Please sign in / sign up to continue or</h3>
                    <button className={`${style.buttonFB} mt-2 mb-2`}><FaFacebook/>Enter with Facebook</button>
                </div>

                <div className='row'>
                    <button className={`${style.buttonSignUp} col-sm-6 col-lg-6 col-xl-6`} onClick={registerInput}>Sign up</button>
                    <button className={`${style.buttonSignIn} col-sm-6 col-lg-6 col-xl-6`} onClick={loginInput}>Sign in</button>
                </div>
                {registerPage ? <Login/> : <Register/>}
            </div>
        </div>
    )
};

export default Index;