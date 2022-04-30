import React from 'react';
import aboutUs from '../images/about/about-us.jpg';
import styles from './AboutEduSection.module.css';

function AboutEduSection() {
  return (
    <React.Fragment>
      <div className={`container py-5 ${styles.AboutSecInHomePage}`}>
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <div className="pb-5">
              <h2>about educenter</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
              <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
              <button className="learnMoreBtn">learn more</button>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <div className="text-center pb-5">
              <img className='w-100' src={aboutUs} alt="about-us" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AboutEduSection