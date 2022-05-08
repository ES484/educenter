import React, {useState} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import aboutPage from '../images/about/about-page.jpg';
import styles from './About.module.css';
import Success from './../Success/Success';
import Teachers from './../Teachers/Teachers';

function About() {
    const [countDone, setCountDone] = useState(true); 
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className={`py-5 ${styles.aboutUsContent}`}>
                        <img className='img-fluid w-100' src={aboutPage} alt="about page" />
                        <h2 className='pt-5 pb-2'>about our journey</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsa illo quod veritatis, magni debitis fugiat dolore voluptates! Consequatur, aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat perferendis sint optio similique. Et amet magni facilis vero corporis quos.</p>
                        <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum a, facere fugit error accusamus est officiis vero in, nostrum laboriosam corrupti explicabo, cumque repudiandae deleniti perspiciatis quae consectetur enim. Laboriosam!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.counter}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 py-3">
                        <div>
                            <VisibilitySensor active={countDone}>
                                {({ isVisible }) => (
                                <div>
                                    {isVisible ? <h3>
                                                    <CountUp start={0} end={60} onEnd={()=>{setCountDone(false)}}/>
                                                </h3> : 0}
                                <h5>teachers</h5>                    
                                </div>
                                )}
                            </VisibilitySensor>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 py-3">
                        <div>
                        <VisibilitySensor active={countDone}>
                                {({ isVisible }) => (
                                <div>
                                    {isVisible ? <h3>
                                                    <CountUp start={0} end={50} onEnd={()=>{setCountDone(false)}}/>
                                                </h3> : 0}
                                <h5>courses</h5>                  
                                </div>
                                )}
                            </VisibilitySensor>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 py-3">
                        <div>
                            <VisibilitySensor active={countDone}>
                                {({ isVisible }) => (
                                <div>
                                    {isVisible ? <h3>
                                                    <CountUp start={0} end={1000} onEnd={()=>{setCountDone(false)}}/>
                                                </h3> : 0}
                                <h5>courses</h5>                  
                                </div>
                                )}
                            </VisibilitySensor>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 py-3">
                        <div>
                        <VisibilitySensor active={countDone}>
                                {({ isVisible }) => (
                                <div>
                                    {isVisible ? <h3>
                                                    <CountUp start={0} end={3737} onEnd={()=>{setCountDone(false)}}/>
                                                </h3> : 0}
                                <h5>satisfied client</h5>                 
                                </div>
                                )}
                            </VisibilitySensor>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Success/>
        <Teachers/>
    </React.Fragment>
  )
}

export default About