import React from 'react';
import styles from './OurCoursesSection.module.css';
import Courses from './../Courses/Courses';
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
            <Courses/>
        </div>
    </React.Fragment>
  )
}

export default OurCoursesSection