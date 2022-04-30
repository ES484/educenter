import React from 'react';
import FirstNavbar from '../FirstNavbar/FirstNavbar';
import Carousel from '../Carousel/Carousel';
import ParaIntro from '../ParaIntro/ParaIntro';
import AboutEduSection from './../AboutEduSection/AboutEduSection';
import OurCoursesSection from './../OurCoursesSection/OurCoursesSection';
import AdventureAndSuccessStories from '../AdventureAndSuccessStories/AdventureAndSuccessStories';
import EventTeacherNews from './../EventTeacherNews/EventTeacherNews';
import Footer from './../Footer/Footer';
function Home() {
  return (
    <React.Fragment>
        <FirstNavbar/>
        <Carousel/>
        <ParaIntro/>
        <AboutEduSection/>
        <OurCoursesSection/>
        <AdventureAndSuccessStories/>
        <EventTeacherNews/>
        <Footer/>
    </React.Fragment>
  )
}

export default Home