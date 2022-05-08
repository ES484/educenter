import React from 'react';
import styles from './Adventure.module.css';

function Adventure() {
  return (
    <React.Fragment>
        <div className={`${styles.adventure} py-5`}>
            <h5>Click to Join the Advance Workshop</h5>
            <h2 className='pt-2 pb-4'>Training In Advannce Networking</h2>
            <button className='border-0 joinBtn'>join now</button>
        </div>
    </React.Fragment>
  )
}

export default Adventure