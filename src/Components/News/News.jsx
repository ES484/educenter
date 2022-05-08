import React from 'react';
import styles from './News.module.css';
import post1 from '../images/blog/post-1.jpg';
import post2 from '../images/blog/post-2.jpg';
import post3 from '../images/blog/post-3.jpg';
import {Link} from 'react-router-dom';
function News() {
    const newsData = [
        {imgUrl: post1, date: "August 28, 2018", author: "By Somrat Sorkar"},
        {imgUrl: post2, date: "August 13, 2018", author: "By Jonathon Drew"},
        {imgUrl: post3, date: "August 24, 2018", author: "By Alex Pitt"}
    ]

  return (
    <React.Fragment>
        <div className='mb-5'>
            <div className="container">
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

export default News