import React from 'react';
import styles from './Courses.module.css';
import course1 from '../images/courses/course-1.jpg';
import course2 from '../images/courses/course-2.jpg';
import course3 from '../images/courses/course-3.jpg';
import course4 from '../images/courses/course-4.jpg';
import course5 from '../images/courses/course-5.jpg';
import course6 from '../images/courses/course-6.jpg';
import {Link} from 'react-router-dom';
function Courses() {
    const coursesdata = [
        {title:"photography", imgUrl: course1},
        {title:"programming", imgUrl: course2},
        {title:"lifestyle archives", imgUrl: course3},
        {title:"complete freelancing", imgUrl: course4},
        {title:"branding design", imgUrl: course5},
        {title:"art design", imgUrl: course6},
    ]
  return (
    <React.Fragment>
        <div className="container py-5">
            <div className="row gy-5">
                {coursesdata.map((coursedata, idx)=>
                    <div className="col-xl-4 col-md-6 col-sm-12" key={idx}>
                    <div className={`card ${styles.cardStyle} border-0`}>
                        <img src={coursedata.imgUrl} className="card-img-top" alt="course1"/>
                            <div className="card-body">
                                <div className={styles.dateAndTime}>
                                <i className="fa-solid fa-calendar-week pe-2"></i>
                                <span>02-14-2018</span>
                                <Link to="" className='ps-3'>Humanities</Link>
                                </div>
                                <h4>{coursedata.title}</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <button className='applyNowBtn'>apply now</button>
                            </div>
                    </div>
                    </div>
                )}
            </div>

        </div>
    </React.Fragment>
  )
}

export default Courses