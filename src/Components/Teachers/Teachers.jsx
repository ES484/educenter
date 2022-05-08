import React from 'react';
import teacher1 from '../images/teachers/teacher-1.jpg';
import teacher2 from '../images/teachers/teacher-2.jpg';
import teacher3 from '../images/teachers/teacher-3.jpg';
import {Link} from 'react-router-dom';
import styles from './Teachers.module.css';
function Teachers() {
    const teachersData = [
        {imgUrl: teacher1, name: "jacke masito"},
        {imgUrl: teacher2, name: "clark malik<"},
        {imgUrl: teacher3, name: "john doe"}
    ];
  return (
    <React.Fragment>
        <div className='mb-5'>
            <div className="container">
                <div className="row py-5 gy-5">
                    <div className="col-md-12">
                        <div>
                            <h2>our teachers</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-5">
                    {teachersData.map((teacherData, idx)=> <div className="col-md-4"  key={idx}>
                        <div className={styles.teachers}>
                            <div className="card border-0">
                                <img src={teacherData.imgUrl} className="card-img-top" alt="teacher1"/>
                                <div className="card-body">
                                    <h4>
                                        <Link to="">{teacherData.name}</Link>
                                    </h4>
                                    <h6>teacher</h6>
                                    <div>
                                        <a href="https://www.facebook.com/themefisher">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="https://twitter.com/themefisher">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="https://github.com/themefisher">
                                            <i className="fa-brands fa-github-alt"></i>
                                        </a>
                                        <a href="https://www.instagram.com/themefisher/">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Teachers