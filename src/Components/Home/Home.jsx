import React from 'react';
import ParaIntro from '../ParaIntro/ParaIntro';
import AboutEduSection from './../AboutEduSection/AboutEduSection';
import OurCoursesSection from './../OurCoursesSection/OurCoursesSection';
import Adventure from './../Adventure/Adventure';
import Success from './../Success/Success';
import Teachers from './../Teachers/Teachers';
import EventSection from './../Events/EventSection';
import NewsSection from './../News/NewsSection';

function Home() {
  return (
    <React.Fragment>
        <ParaIntro/>
        <AboutEduSection/>
        <OurCoursesSection/>
        <Adventure/>
        <Success/>
        <EventSection/>
        <Teachers/>
        <NewsSection/>
    </React.Fragment>
  )
}

export default Home