import React from 'react';
import styles from './OurCoursesSection.module.css';
import course1 from '../images/courses/course-1.jpg';
import course2 from '../images/courses/course-2.jpg';
import course3 from '../images/courses/course-3.jpg';
import course4 from '../images/courses/course-4.jpg';
import course5 from '../images/courses/course-5.jpg';
import course6 from '../images/courses/course-6.jpg';
import {Link} from 'react-router-dom';

function OurCoursesSection() {
  return (
    <React.Fragment>
        <div className="container py-5">
            <div className="row align-items-center pb-5">
                <div className="col-md-2 col-sm-4">
                    <div>
                        <h2>our course</h2>
                    </div>
                </div>
                <div className="col-md-8 col-sm-4">
                    <div className={styles.divider}></div>
                </div>
                <div className="col-md-2 col-sm-4">
                    <div>
                        <button className='seeAllBtn'>see all</button>
                    </div>
                </div>
            </div>
            <div className="row gy-5">
                <div className="col-xl-4 col-md-6 col-sm-12">
                <div className={`card ${styles.cardStyle} border-0`}>
                    <img src={course1} className="card-img-top" alt="course1"/>
                        <div className="card-body">
                            <div className={styles.dateAndTime}>
                            <i className="fa-solid fa-calendar-week pe-2"></i>
                            <span>02-14-2018</span>
                            <Link to="" className='ps-3'>Humanities</Link>
                            </div>
                            <h4>photography</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <button className='applyNowBtn'>apply now</button>
                        </div>
                </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                <div className={`card ${styles.cardStyle} border-0`}>
                    <img src={course2} className="card-img-top" alt="course1"/>
                        <div className="card-body">
                            <div className={styles.dateAndTime}>
                            <i className="fa-solid fa-calendar-week pe-2"></i>
                            <span>02-14-2018</span>
                            <Link to="" className='ps-3'>Humanities</Link>
                            </div>
                            <h4>programming</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <button className='applyNowBtn'>apply now</button>
                        </div>
                </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                <div className={`card ${styles.cardStyle} border-0`}>
                    <img src={course3} className="card-img-top" alt="course1"/>
                        <div className="card-body">
                            <div className={styles.dateAndTime}>
                            <i className="fa-solid fa-calendar-week pe-2"></i>
                            <span>02-14-2018</span>
                            <Link to="" className='ps-3'>Humanities</Link>
                            </div>
                            <h4>lifestyle archives</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <button className='applyNowBtn'>apply now</button>
                        </div>
                </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                <div className={`card ${styles.cardStyle} border-0`}>
                    <img src={course4} className="card-img-top" alt="course1"/>
                        <div className="card-body">
                            <div className={styles.dateAndTime}>
                            <i className="fa-solid fa-calendar-week pe-2"></i>
                            <span>02-14-2018</span>
                            <Link to="" className='ps-3'>Humanities</Link>
                            </div>
                            <h4>complete freelancing</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <button className='applyNowBtn'>apply now</button>
                        </div>
                </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                <div className={`card ${styles.cardStyle} border-0`}>
                    <img src={course5} className="card-img-top" alt="course1"/>
                        <div className="card-body">
                            <div className={styles.dateAndTime}>
                            <i className="fa-solid fa-calendar-week pe-2"></i>
                            <span>02-14-2018</span>
                            <Link to="" className='ps-3'>Humanities</Link>
                            </div>
                            <h4>branding design</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <button className='applyNowBtn'>apply now</button>
                        </div>
                </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                <div className={`card ${styles.cardStyle} border-0`}>
                    <img src={course6} className="card-img-top" alt="course1"/>
                        <div className="card-body">
                            <div className={styles.dateAndTime}>
                            <i className="fa-solid fa-calendar-week pe-2"></i>
                            <span>02-14-2018</span>
                            <Link to="" className='ps-3'>Humanities</Link>
                            </div>
                            <h4>art design</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <button className='applyNowBtn'>apply now</button>
                        </div>
                </div>
                </div>
            </div>

        </div>
    </React.Fragment>
  )
}

export default OurCoursesSection