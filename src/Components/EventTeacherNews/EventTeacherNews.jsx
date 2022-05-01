import React from 'react';
import styles from './EventTeacherNews.module.css';
import event1 from '../images/events/event-1.jpg';
import event2 from '../images/events/event-2.jpg';
import event3 from '../images/events/event-3.jpg';
import teacher1 from '../images/teachers/teacher-1.jpg';
import teacher2 from '../images/teachers/teacher-2.jpg';
import teacher3 from '../images/teachers/teacher-3.jpg';
import post1 from '../images/blog/post-1.jpg';
import post2 from '../images/blog/post-2.jpg';
import post3 from '../images/blog/post-3.jpg';
import {Link} from 'react-router-dom';
function EventTeacherNews() {
    const eventsData = [
        {imgUrl: event1, eventDate: 18},
        {imgUrl: event2, eventDate: 21},
        {imgUrl: event3, eventDate: 23},
    ];
    const teachersData = [
        {imgUrl: teacher1, name: "jacke masito"},
        {imgUrl: teacher2, name: "clark malik<"},
        {imgUrl: teacher3, name: "john doe"}
    ];
    const newsData = [
        {imgUrl: post1, date: "August 28, 2018", author: "By Somrat Sorkar"},
        {imgUrl: post2, date: "August 13, 2018", author: "By Jonathon Drew"},
        {imgUrl: post3, date: "August 24, 2018", author: "By Alex Pitt"}
    ]

  return (
    <React.Fragment>
        <div className='bg-light py-5'>
            <div className="container">
                <div className="row align-items-center py-5">
                        <div className="col-md-3 col-sm-4">
                            <div>
                                <h2>upcoming events</h2>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-4">
                            <div className={styles.divider}></div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div>
                                <button className='seeAllBtn'>see all</button>
                            </div>
                        </div>
                </div>
                <div className="row gy-5">
                    {eventsData.map((eventData, idx)=> <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
                        <div className={`card ${styles.cardEvent} border-0`}>
                            <img src={eventData.imgUrl} className="card-img-top" alt="event1_image"/>
                            <div className="card-body">
                                <i className="fa-solid fa-location-dot pe-2"></i>
                                <span className='text-capitalize'>dhanmondi lake, dhaka</span>
                                <h5 className='py-3'>
                                    <Link to="">Lorem ipsum dolor amet, consectetur adipisicing.</Link>
                                </h5>
                            </div>
                            <div className={styles.eventDate}>
                                <h2>{eventData.eventDate}</h2>
                                <h6>december</h6>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
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
                <div className="row py-5">
                    <div className="col-md-12">
                        <div>
                            <h2>latest news</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-5 py-5">
                    {newsData.map((newData, idx)=><div className="col-md-4" key={idx}>
                        <div className={styles.news}>
                            <div className="card border-0 border-bottom">
                                <img src={newData.imgUrl} className="card-img-top" alt="post1"/>
                                <div className="card-body">
                                    <span className='pe-5'>{newData.date}</span>
                                    <span>{newData.author}</span>
                                    <h5 className='py-3'>
                                        <Link to="">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</Link>
                                    </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                                    <button className='readMore'>read more</button>
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

export default EventTeacherNews