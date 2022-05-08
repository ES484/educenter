import React from 'react';
import styles from './Carousel.module.css';
import Navbar from './../Navbar/Navbar';
import {useLocation} from 'react-router-dom';
import NoticeCaption from '../Notice/NoticeCaption';
import HomeCaption from './../Home/HomeCaption';
import ResearchCaption from './../Research/ResearchCaption';
import ScholarshipCaption from './../Scholarship/ScholarshipCaption';
import AboutCaption from '../About/AboutCaption';
import CoursesCaption from './../Courses/CoursesCaption';
import EventsCaption from './../Events/EventsCaption';
import NewsCaption from './../News/NewsCaption';
import ContactCaption from './../Contact/ContactCaption';

function Carousel(props) {
    const location = useLocation();
    const fixedCaption = <div className="d-inline-block">
        <h2>Home</h2> 
        <i className="fa-solid fa-angle-right px-2 fs-2"></i>
    </div>
   function changeCaption() {
    switch (location.pathname) {
        case "/home":
           return <div><HomeCaption/></div>
        case "/":
           return <div><HomeCaption/></div>
        case "/notice":
            return <div>
                   {fixedCaption} <NoticeCaption/>
                </div>
        case "/research":
            return <div>
            {fixedCaption} <ResearchCaption/>
         </div>
         case "/scholarship":
            return <div>
            {fixedCaption} <ScholarshipCaption/>
         </div>
         case "/about":
            return <div>
            {fixedCaption} <AboutCaption/>
         </div>
         case "/courses":
            return <div>
            {fixedCaption} <CoursesCaption/>
         </div>
         case "/events":
            return <div>
            {fixedCaption} <EventsCaption/>
         </div>
         case "/news":
            return <div>
            {fixedCaption} <NewsCaption/>
         </div>
         case "/contact":
            return <div>
            {fixedCaption} <ContactCaption/>
         </div>
        default:
            return ""
    }
   }
  return (
     <React.Fragment>{props.userData?<div>
        <Navbar/>
        <div id="carouselExampleCaptions" className={`carousel slide vh-100`} data-bs-ride="carousel">
            <div className={styles.overlay}></div>
            <div className={`carousel-indicators justify-content-start ${styles.carouselIndicatiors}`}>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className={`${styles.itemsContainer} carousel-inner h-100`}>
                <div className={`carousel-item active h-100 ${styles.firstCarousel}`}>
                <div className={`${styles.carouselCaption} carousel-caption`}>
                    {changeCaption()}
                </div>
                </div>
                <div className={`carousel-item h-100 ${styles.secondCarousel}`}>
                <div className={`${styles.carouselCaption} carousel-caption`}>
                {changeCaption()}
                </div>
                </div>
                <div className={`carousel-item h-100 ${styles.thirdCarousel}`}>
                <div className={`${styles.carouselCaption} carousel-caption`}>
                {changeCaption()}
                </div>
                </div>
        </div>
            <button className={`carousel-control-prev ${styles.prevBtn}`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className={`carousel-control-next ${styles.nextBtn}`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div></div>:''}
    </React.Fragment>
  )
}

export default Carousel