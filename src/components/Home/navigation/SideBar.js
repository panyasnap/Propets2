import React from 'react';
import style from "../../../style.home/home.module.css";
import {Link} from "react-router-dom";
import {changeUserPage, favoritesPage, foundPetPage, HotelsPage, lostPetPage, postPage} from "../../../utils/constans";
import {FaBullhorn, FaHome, FaPaw} from "react-icons/fa";
import {HiSearch} from "react-icons/hi";
import ServicesMenu from "./ServicesMenu";
import {AiFillStar, AiOutlineExport} from "react-icons/ai";
import {logout} from "../../../redux/account/action";
import {useDispatch, useSelector} from "react-redux";
import { slide as Menu } from "react-burger-menu";

const SideBar = (props) => {
    const dispatch = useDispatch();
    const info = useSelector(state => state.account.user)

    return (
        <div>
            {props.isOpen ?
            <Menu >
                <ul className={`${style.TextLi} `}>
                    <li className='mt-2'><Link to={`/home/${postPage} `}   onClick={props.changeButtonAddNew}>
                        <FaHome/> Home</Link></li>
                    <li className='mt-2'><Link to={`/home/${lostPetPage}`}
                                               onClick={props.changeButtonLost}><HiSearch/>Lost</Link></li>
                    <li className='mt-2'><Link to={`/home/${foundPetPage}`}
                                               onClick={props.changeButtonLost}><FaPaw/> Found</Link></li>
                    <li className='mt-2'><Link to={`/home/${HotelsPage}`}
                                               onClick={props.openServices}><FaBullhorn/> Services</Link></li>
                    {props.isOpenMenu ? <ServicesMenu closeMenu={props.closeMenu}/> : null}
                    <li className='mt-2'><Link to={`/home/${favoritesPage}`}
                                               onClick={props.changeButtonAddNew}><AiFillStar/> Favorites</Link>
                    </li>
                </ul>

                <div className={`${style.line} mt-5 ml-5`}>

                    <Link to={`/home/${changeUserPage}`}>
                        <div className='row mt-3'>
                            <img
                                className={`${style.HomeAvatar} ml-3`}
                                src={info.avatar} alt={info.name}/>
                            <p className='ml-3'>{info.name}</p>
                        </div>

                    </Link>
                    <Link to={'/main'}>
                        <div className='ml-5 mt-5 col-sm-12 col-lg-12 col-xl-12 mb-3'
                             onClick={() => dispatch(logout())}>
                            <AiOutlineExport/> logout
                        </div>
                    </Link>
                </div>
            </Menu>: null}
        </div>
    );
};

export default SideBar;