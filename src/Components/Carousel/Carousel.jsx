import React from 'react';
import styles from './Carousel.module.css';
import Navbar from './../Navbar/Navbar';
function Carousel() {
  return (
    <React.Fragment>
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
                    <h3>Your bright future is our mission</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus vero earum nobis in accusantium unde sapiente! Corrupti enim ut labore quidem sequi! Accusamus beatae minus asperiores eos tenetur fugit velit!</p>
                    <button className="applyNowBtn">Apply Now</button>
                </div>
                </div>
                <div className={`carousel-item h-100 ${styles.secondCarousel}`}>
                <div className={`${styles.carouselCaption} carousel-caption`}>
                    <h3>Your bright future is our mission</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus vero earum nobis in accusantium unde sapiente! Corrupti enim ut labore quidem sequi! Accusamus beatae minus asperiores eos tenetur fugit velit!</p>
                    <button className="applyNowBtn">Apply Now</button>
                </div>
                </div>
                <div className={`carousel-item h-100 ${styles.thirdCarousel}`}>
                <div className={`${styles.carouselCaption} carousel-caption`}>
                    <h3>Your bright future is our mission</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus vero earum nobis in accusantium unde sapiente! Corrupti enim ut labore quidem sequi! Accusamus beatae minus asperiores eos tenetur fugit velit!</p>
                    <button className="applyNowBtn">Apply Now</button>
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
        </div>
    </React.Fragment>
  )
}

export default Carousel