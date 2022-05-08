import React from 'react';
import styles from './Scholarship.module.css';
import scholarship from '../images/scholarship/scholarship.jpg';
import scholarshipItem1 from '../images//scholarship/scholarship-item-1.jpg';
import scholarshipItem2 from '../images//scholarship/scholarship-item-2.jpg';
import scholarshipItem3 from '../images//scholarship/scholarship-item-3.jpg';

function Scholarship() {
    const scholarshipItems= [
        {mainTitle: "engineering", title: "chemical engineering", imgUrl: scholarshipItem1},
        {mainTitle: "design & arts", title: "music & arts", imgUrl: scholarshipItem2},
        {mainTitle: "design & arts", title: "graphics design", imgUrl: scholarshipItem3}
    ]
  return (
    <React.Fragment>
        <div className="container py-5">
            <div className="row gy-4 pb-5">
                <div className="col-md-6">
                    <div>
                        <img className='img-fluid' src={scholarship} alt="scholarship" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.scholarshipMainPart}>
                        <h2>scholarship news</h2>
                        <h5>Our campuses are living laboratories for sustainability.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et.dolore magna aliquauis aute irure dolor. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas cum ut ab nesciunt distinctio maxime expedita fugit laborum? Aliquid, quia.</p>
                    </div>
                </div>
            </div>
            <div className="row gy-5">
                {scholarshipItems.map((scholarshipItem,idx)=><div className="col-lg-4 col-md-6" key={idx}>
                    <div className={`card ${styles.scholarshipItemCard} border-0`}>
                        <img src={scholarshipItem.imgUrl} className="card-img-top" alt={scholarshipItem.title}/>
                        <div className="card-body">
                            <span className='text-capitalize'>{scholarshipItem.mainTitle}</span>
                            <h4>{scholarshipItem.title}</h4>
                            <ul className="list-styled">
                                <li>institutes</li>
                                <li>Smart-affiliated research</li>
                                <li>Digital Access to Scholarship</li>
                                <li>Smart Catalyst</li>
                                <li>Smart Library Portal</li>
                                <li>Smart research programs</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Scholarship