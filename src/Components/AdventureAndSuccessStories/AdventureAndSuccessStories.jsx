import React from 'react';
import styles from './AdventureAndSuccessStories.module.css'

function AdventureAndSuccessStories() {
  return (
    <React.Fragment>
        <div className={`${styles.adventure} py-5`}>
            <h5>Click to Join the Advance Workshop</h5>
            <h2 className='pt-2 pb-4'>Training In Advannce Networking</h2>
            <button className='border-0 joinBtn'>join now</button>
        </div>
        <div className={styles.success}>
            <div className="container p-5">
                <div className="row">
                    <div className="col-xl-5 offset-xl-7 col-md-8 offset-md-2">
                    <div className={`${styles.content} p-5`}>
                        <h2>success stories</h2>
                        <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                        <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AdventureAndSuccessStories