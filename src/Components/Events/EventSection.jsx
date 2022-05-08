import React from 'react';
import Events from './Events';
import styles from './Events.module.css';
function EventSection() {
  return (
    <React.Fragment>
        <div className='bg-light'>
            <div className="container">
                <div className="row align-items-center pt-5">
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
            </div>
        </div>
        <Events/>
    </React.Fragment>
  )
}

export default EventSection