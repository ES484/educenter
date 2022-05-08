import React from 'react';
import styles from  './Notice.module.css';
import {Link} from 'react-router-dom';
function Notice() {
  const noticesData = [
    {title: "Teaching Materials and Testing Methods", date: 30},
    {title: "Biltong sirloin sausage brisket porchetta prosciutto", date: 27},
    {title: "Teaching Materials and Testing Methods", date: 25},
    {title: "Biltong sirloin sausage brisket porchetta prosciutto", date: 23}
  ]
  return (
    <React.Fragment>
      <div className="container py-5">
        {noticesData.map((noticeData, idx)=><div className="row my-3 bg-white border-bottom noticeItem" key={idx}>
          <div className="col-md-2 col-sm-12 ps-0">
            <div className={`${styles.noticeDate} text-center py-5 text-white`}>
              <h3>{noticeData.date}</h3>
              <span>APR, 2019</span>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 pt-3">
            <div className={styles.noticeContent}>
              <Link to="" >{noticeData.title}</Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 d-flex flex-row-reverse pe-5 pt-5">
            <div>
              <button className='readMore'>read more</button>
            </div>
          </div>
        </div>)}
      </div>
    </React.Fragment>
  )
}

export default Notice