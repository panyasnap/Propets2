import React from 'react';
import styles from '../../style/info.module.css'


const Info = () => {
    return (
        <div>

            <div className={`jumbotron-fluid ${styles.infoText}`}>
                <div className='container'>
                    <div className='row'>
                        <p className={`${styles.divText} mt-3`}>
                            Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed
                            guys.
                        </p>

                    </div>
                </div>
            </div>
            <div className='jumbotron-fluid'>
                <div className='container'>
                    <div className='row '>
                        <div className='imgMainPets col-sm-6 col-lg-6 col-xl-6 mt-3 mb-4'/>

                        <div className='col-sm-6 col-lg-6 col-xl-6 justify-content-start mt-5'>
                            <h2 className={`${styles.liTextH1}`}>Here is collected everything that your pet needs:</h2>
                            <ul className={`${styles.ulStyle}`}>
                                <li>professional veterinarian tips;</li>
                                <li>useful information about education and care;</li>
                                <li>fostering home search;</li>
                                <li>information about pet-sitting and walking service;</li>
                                <li>and of course, great communication
                                    with new friends in your social network!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`jumbotron-fluid ${styles.ComingSoon}`}>
                <div className='container'>
                    <div className='row mt-3'>
                        <h1 className='col-sm-4 col-lg-4 col-xl-4 d-flex mt-4 '>Coming Soon</h1>
                        <p className='col-sm-4 col-lg-4 col-xl-4 d-flex justify-content-center mt-3'>We are planing to open a new
                            service,
                            where your cats and dogs can find their love!</p>
                        <div className='col-sm-4 col-lg-4 col-xl-4 d-flex justify-content-center mt-5'>LOVE</div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Info;