import React from 'react';
import {FaClinicMedical, FaDog, FaHotel} from "react-icons/fa";
import {GiWalk} from "react-icons/gi";
import style from "../../../style.home/home.module.css";
import {FosteringPage, HotelsPage, VetHelpPage, WalkingPage} from "../../../utils/constans";
import {Link} from "react-router-dom";

const ServicesMenu = (props) => {
    return (
        <div>
            <div className={`${style.TextLiServices}`}>
                <li ><Link to={`/home/${HotelsPage}`} onClick={props.closeMenu}><FaHotel/> Hotels</Link></li>
                <li><Link to={`/home/${WalkingPage}`} onClick={props.closeMenu}><GiWalk/> Walking</Link></li>
                <li><Link to={`/home/${FosteringPage}`} onClick={props.closeMenu}><FaDog/> Fostering</Link></li>
                <li><Link to={`/home/${VetHelpPage}`} onClick={props.closeMenu}><FaClinicMedical/> VetHelp</Link></li>
            </div>
        </div>
    );
};

export default ServicesMenu;