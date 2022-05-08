import React from 'react';
import event1 from '../images/events/event-1.jpg';
import event2 from '../images/events/event-2.jpg';
import event3 from '../images/events/event-3.jpg';
import styles from './Events.module.css';
import {Link} from 'react-router-dom';

function Events() {
    const eventsData = [
        {imgUrl: event1, eventDate: 18},
        {imgUrl: event2, eventDate: 21},
        {imgUrl: event3, eventDate: 23},
    ];
  return (
    <React.Fragment>
        <div className='bg-light py-5'>
            <div className="container">
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
    </React.Fragment>
  )
}

export default Events