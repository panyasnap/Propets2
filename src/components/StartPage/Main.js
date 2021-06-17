import React, {useContext} from 'react';
import style from '../../style/main.module.css'
import {UseContext} from "../../utils/Context";

const Main = () => {
    const {openModal} = useContext(UseContext)
    return (

        <div className='container'>
            <div className='row'>
                <div className='col-sm-7 col-lg-7 col-xl-7 mt-5'>
                    <div className={`${style.h1Div}`}>
                        <h1 className={`${style.h1Div1}`}>Welcome to your</h1>
                        <h1 className={`${style.h1Div2}`}> pawfessional</h1>
                        <h1 className={`${style.h1Div3}`}> community</h1>
                    </div>
                    <div>
                        <button className={`${style.LostPetButton} ${style.DivButton} col-sm-7 col-lg-7 col-xl-7`} onClick={openModal}>I'm lost my
                            pet!
                        </button>
                    </div>
                    <div className={`${style.DivButton}`}>
                        <button className={`${style.FoundPetButton} col-sm-7 col-lg-7 col-xl-7`} onClick={openModal}>I'm found a pet!</button>
                    </div>
                    <div>
                        <p>I'm ok, just want to join to community!</p>
                    </div>
                </div>
                <div className='main col-lg-5 col-xl-5 col-sm-5 '>

                </div>
            </div>
        </div>


    );
};

export default Main;