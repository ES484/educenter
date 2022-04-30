import React from 'react';
import bannerFeature from  '../images/banner/banner-feature.png';
import styles from './ParaIntro.module.css';
function ParaIntro() {
  return (
    <React.Fragment>
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <div>
                        <img className='w-100 h-100' src={bannerFeature} alt="banner-Feature" />
                    </div>
                </div>
                <div className={`col-lg-8 col-md-12 pt-5 ps-5 ${styles.paragraphs}`}>
                    <div className="row py-3">
                    <div className="col-sm-6">
                        <div>
                            <i className="fa-solid fa-book-open"></i>
                            <h3>scholorship news</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <i className="fa-solid fa-chalkboard"></i>
                            <h3>our notice board</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                        </div>
                    </div>
                    </div>
                    <div className="row py-3">
                    <div className="col-sm-6">
                        <div>
                            <i className="fa-solid fa-calendar-minus"></i>
                            <h3>our achievements</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <i className="fa-regular fa-pen-to-square"></i>
                            <h3>admission now</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ParaIntro