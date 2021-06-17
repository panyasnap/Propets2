import React, {useContext, useState} from 'react';
import {UseContext} from "../../utils/Context";
import {connect} from "react-redux";
import {createToken} from "../../utils/constans";
import style from "../../style/Modal.module.css";
import {FaPaw} from "react-icons/fa"
import {loginUser} from "../../redux/account/action";
import {bindActionCreators} from "redux";

const Login = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClickLogin = () => {
        const token = createToken(login, password)
        props.login(token)
    }

    const {closeModal} = useContext(UseContext)
    return (
        <div>
            <form>
                <div className='mt-4'>
                    {/*<label className='pl-4'>Email:</label>*/}
                    <input
                        className={`${style.inputForm} m-2`}
                        onChange={e => setLogin(e.target.value.trim())}
                        value={login}
                        type='text'
                        placeholder={'Email'}
                    />
                </div>
                <div className='mb-3'>
                    {/*<label>Password</label>*/}
                    <input
                        className={`${style.inputForm} m-2`}
                        onChange={e => setPassword(e.target.value.trim())}
                        value={password}
                        type='password'
                        placeholder={'Password'}
                    />
                </div>
                <div className='row'>
                    <p className={`${style.inputText} col-sm-6 col-lg-6 col-xl-6 `}>By clicking “Submit”, you agree to us processing your information in accordance
                        with these
                        terms.</p>
                    <button className={`${style.buttonCancel} col-sm-3 col-lg-3 col-xl-3`} onClick={closeModal}>Cancel</button>
                    <button className={`${style.buttonSubmit} col-sm-3 col-lg-3 col-xl-3`} onClick={event => {
                        event.preventDefault()
                        handleClickLogin()
                    }}><FaPaw/> Submit</button>
                </div>
            </form>
        </div>
    );
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        login:loginUser
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)