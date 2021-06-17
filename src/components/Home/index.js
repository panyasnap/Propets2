import React, {useState} from 'react';
import HomePage from "./HomePage";
import Header from "./Header";
import style from '../../style.home/home.module.css'
import {postPage} from "../../utils/constans";
import style1 from '../../style.home/PostPage.module.css'
import Navigation from "./navigation";
import RightSide from "./RightSide";

const Index = (props) => {
    const [page, setPage] = useState({postPage});
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [button, setButton] = useState(true);
    const [isOpen, setIsOpen] = useState(true)

    const openMenu = () => {
        setIsOpen(true)
    }
    const closeMenu = () => {
        setIsOpen(false)

    }
    const changeActivePage = page => {
        return setPage(page)
    }

    const changeButtonLost = () => {
        setButton(false)
        closeServices();
        closeMenu()
    }
    const changeButtonAddNew = () => {
        setButton(true);
        closeServices()
        closeMenu()
    }

    const openServices = () => {
        setIsOpenMenu(true);
        setButton(true)


    }
    const closeServices = () => {
        setIsOpenMenu(false);
        closeMenu()

    }
    return (

        <div>
            <Header page={props.page} changeActivePage={changeActivePage} button={button}/>
            <div className={`${style.HomeBack} jumbotron-fluid`}>
                <div className='container '>
                    <div className='row'>
                        <div className='col-sm-2 col-lg-2 col-xl-2'>
                            <Navigation changeButtonLost={changeButtonLost} changeButtonAddNew={changeButtonAddNew}
                                        isOpen={isOpen} openMenu={openMenu}
                                        isOpenMenu={isOpenMenu} openServices={openServices}
                                        closeServices={closeServices} closeMenu={closeMenu}/>
                        </div>
                        <div className={`${style1.postPage} col-sm-8 col-lg-8 col-xl-8`}>
                            <HomePage page={props.page} changeActivePage={changeActivePage}/>
                        </div>
                        <div className='col-sm-2 col-lg-2 col-xl-2'>
                            <RightSide button={button}/>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};
export default Index
