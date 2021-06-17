import React, {useContext, useState} from 'react';
import {connect} from "react-redux";
import {UseContext} from "../../utils/Context";
import {registerUser} from "../../redux/account/action";
import style from "../../style/Modal.module.css";
import {FaPaw} from "react-icons/fa"
import {bindActionCreators} from "redux";

const Register = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPass, setRepeatPass] = useState('')


    const {closeModal} = useContext(UseContext)


    const handleClickRegister = () => {
        // if (email && password && Name) {
        const user = {name, email, password};
        props.register(user);
        // } else {
        //     props.error('заполните все поля');
        //
        // }
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 col-lg-6 col-xl-6'>
                    <div>
                        <div>
                            {/*<label className=''>Name:</label>*/}
                                <input
                                    className={`${style.inputForm}  m-2`}
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    type='text'
                                    placeholder='Name'
                                />

                        </div>
                        <div>
                            {/*<label className=''>Email: </label>*/}
                                <input
                                    className={`${style.inputForm}  m-2`}
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    type='email'
                                    placeholder={'Email'}
                                />

                        </div>
                        <div>
                            {/*<label>Password:  </label>*/}
                                <input
                                    className={`${style.inputForm} m-2`}
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    type='password'
                                    placeholder={'Password'}
                                />

                        </div>
                    </div>
                    <div>
                        {/*<label>Password: </label>*/}
                            <input
                                className={`${style.inputForm}  m-2`}
                                onChange={e => setRepeatPass(e.target.value)}
                                value={repeatPass}
                                type='password'
                                placeholder={'Repeat password'}
                            />

                    </div>
                </div>
                <div className='col-sm-6 col-lg-6 col-xl-6 mt-5'>
                    <p className={`${style.inputText}`}>Password must have at least 8 characters with at least one
                        Capital letter, at least one lower
                        case
                        letter and at least one number or special character.</p>
                    <p className={`${style.inputText}`}>Please re-enter your password</p>
                </div>
                <div className='row'>
                    <p className={`${style.inputText} col-sm-6 col-lg-6 col-xl-6`}>By clicking “Submit”, you agree to us processing your
                        information in accordance
                        with these
                        terms.</p>
                    <button className={`${style.buttonCancel} col-sm-3 col-lg-3 col-xl-3 `} onClick={closeModal}>Cancel</button>
                    <button className={`${style.buttonSubmit} col-sm-3 col-lg-3 col-xl-3`} onClick={handleClickRegister}>
                        <FaPaw/> Register
                    </button>

                </div>
            </div>
        </div>
    );
};


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        register: registerUser,
       // error: error
    }, dispatch)
}
const mapStateToProps = state => ({
    message: state.message
});

export default connect(mapStateToProps, mapDispatchToProps)(Register)