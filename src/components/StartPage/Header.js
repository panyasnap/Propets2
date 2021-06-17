import React, {useContext} from 'react';
import Group from '../../img/Group 1.svg';
import '../../App.css'
import styles from "../../style/header.module.css";
import {UseContext} from "../../utils/Context";

const Header = () => {
    const {openModal} = useContext(UseContext)
    return (
        <header className='jumbotron-fluid'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-lg-3 col-xl-3 col-sm-3 mt-3 mb-2'>
                        <img src={Group} alt='group'/>
                    </div>
                    <div className='col-lg-3 col-xl-3 col-sm-3 mt-3'>
                        <button className={`${styles.HEDbutton}`} onClick={openModal}>Sign in</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
