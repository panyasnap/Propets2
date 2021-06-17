import React, {useEffect, useState} from 'react';
import style from "../../../style.home/home.module.css";
import SideBar from "./SideBar";
import MainMenu from "./MainMenu";

const Index = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };


    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className={`${style.HomeBack} container`}>
            <div className='row'>
                <div>
                    {windowWidth <= 768 ?
                        <div className='ml-5'>
                            <button className={`${style.textMenu} btn ml-4`} onClick={props.openMenu}>Menu</button>
                            <SideBar
                                closeMenu={props.closeMenu}
                                isOpen={props.isOpen}
                                pageWrapId={ "page-wrap" }
                                outerContainerId={ "outer-container" }
                                isOpenMenu={props.isOpenMenu}
                                openServices={props.openServices} closeServices={props.closeServices}
                                changeButtonLost={props.changeButtonLost}
                                changeButtonAddNew={props.changeButtonAddNew}/></div>
                        :
                        <MainMenu

                            isOpenMenu={props.isOpenMenu}
                            openServices={props.openServices} closeServices={props.closeServices}
                            changeButtonLost={props.changeButtonLost} changeButtonAddNew={props.changeButtonAddNew}
                        />
                    }
                </div>
            </div>
        </div>
    );
};
export default Index;
