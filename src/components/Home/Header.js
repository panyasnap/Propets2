import React from 'react';
import Group from "../../img/Group 2.svg";
import style from '../../style.home/HomeHeader.module.css'
import {FiPlus} from 'react-icons/fi'
import {Link} from "react-router-dom";
import {addNewPostPage, FoundPetPage, LostPetPage, postPage} from "../../utils/constans";
import {FaPaw} from "react-icons/fa";
import {HiSearch} from "react-icons/hi";

const Header = (props) => {
    return (
        <div className={`${style.HomeHeader} jumbotron-fluid `}>
            <div className='container '>
                <div >
                    <nav className='row justify-content-between'>
                        <Link to={`/home/${postPage} `}> <img className='mt-4 mb-3' src={Group} alt='group'/></Link>
                        {props.button?
                        <Link to={`/home/${addNewPostPage}`}>
                            <button className={`${style.addNewButton} mt-3`}><FiPlus/> Add new</button>
                        </Link> :
                            <div className={`mt-3 col-sm-4 col-lg-4 col-xl-4`}>
                       <Link to={`/home/${LostPetPage}`}> <button className={`${style.LostPetButton} `}><HiSearch/> I lost my pet</button></Link>
                       <Link to={`/home/${FoundPetPage}`}> <button className={`${style.foundPetButton}`}><FaPaw/> I found a pet</button>
                       </Link>
                            </div>}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;