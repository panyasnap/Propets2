import React from 'react';
import styles from '../../style/footer.module.css'
import Group from "../../img/Group 87.svg";
import {FaFacebook, FaInstagram} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {FaPaw, FaClinicMedical,FaHotel,FaDog} from "react-icons/fa"
import {GiWalk} from "react-icons/gi"

const Footer = () => {
    return (

        <footer className='jumbotron-fluid'>
            <div className='container'>
            <div className='row'>
                <div className='col-sm-3 col-xl-3 col-lg-3 mt-5 '>
                    <img src={Group} alt='group'/>
                </div>
                <div className='col-sm-4 col-lg-4 col-xl-4 offset-1 mt-4 mb-3'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <div>
                        <p>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</p>
                    </div>
                </div>
                <div className='row col-sm-4 col-lg-4 col-xl-4  mt-auto mb-4'>
                    <ul>
                        <li className={`${styles.li}`}> <AiOutlineSearch/>Lost </li>
                        <li className={`${styles.li}`}> <FaPaw/>Found </li>
                        <li className={`${styles.li}`}> <FaClinicMedical/>VetHelp </li>
                    </ul>
                    <ul>
                        <li className={`${styles.li}`}><FaHotel/>Hotels</li>
                        <li className={`${styles.li}`}><GiWalk/>Walking</li>
                        <li className={`${styles.li}`}><FaDog/>Fostering</li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;