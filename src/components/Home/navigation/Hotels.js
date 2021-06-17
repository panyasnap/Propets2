import React from 'react';
import style from '../../../style.services/servicer.module.css'
import {useSelector} from "react-redux";
import dog from '../../../img/5d87fd0f82452ab6787e72d1754d8900.png'

const Hotels = () => {
    const info = useSelector(state => state.account.user)
    return (
        <div>
            <h1 className={`${style.H1Text} m-4`}>Hotels. Go to vacations — we’ll take care of your pet!</h1>
            <div className={`${style.boxPost}`}>
                <div className='container'>
                    <div className='row ml-3 justify-content-between'>
                        <div className='row'>
                            <img className={`${style.imgAvatar} mt-3 ml-4 col-lg-1 col-sm-1 col-xl-1`} src={info.avatar}
                                 alt={info.userLogin}/>
                            <div className={`${style.TextName} mt-3 ml-2`}> {info.name}</div>
                        </div>
                        <div className='mt-2 ml-5 col-lg-12 col-sm-12 col-xl-12'>
                            <img className='ml-4' src={dog} alt={'hotel'}/>

                            <div className={`${style.TextServices} mt-2 mb-2 mr-5 ml-4`}>
                                Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens
                                jump; dozy fowl quack …more
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`${style.boxPost} mt-2`}>
                <div className='container mb-2'>
                    <div className='row ml-3 justify-content-between'>
                        <div className='row'>
                            <img className={`${style.imgAvatar} mt-3 ml-4 col-lg-1 col-sm-1 col-xl-1`} src={info.avatar}
                                 alt={info.userLogin}/>
                            <div className={`${style.TextName} mt-3 ml-2`}> {info.name}</div>
                        </div>
                        <div className='mt-2 ml-5 col-lg-12 col-sm-12 col-xl-12'>
                            <img className='ml-4' src={dog} alt={'hotel'}/>

                            <div className={`${style.TextServices} mt-2 mb-2 mr-5 ml-4`}>
                                Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens
                                jump; dozy fowl quack …more
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hotels;