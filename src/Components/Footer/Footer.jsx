import React from 'react';
import styles from './Footer.module.css';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

function Footer() {
  return (
    <React.Fragment>
        <div className={`container-fluid p-0 ${styles.footer}`}>
            <div className="row gx-0 pb-5">
                <div className="col-md-8 offset-md-4">
                    <div className={styles.subscribe}>
                        <h4>subscribe now</h4>
                        <div className="bg-white py-4 px-3 d-flex justify-content-between">
                            <input className='focus-0' type="email" name="userEmail" id="userEmail" placeholder='Enter Your Email...'/>
                            <label htmlFor="userEmail"></label>
                            <button className="join">join</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-xs-12">
                        <div className='px-3'>
                            <Link to="">
                                <img src={logo} alt="logo" />
                            </Link>
                            <ul>
                                <li>23621 15 Mile Rd #C104, Clinton MI, 48035, New York, USA</li>
                                <li>+1 &#40;2&#41; 345 6789</li>
                                <li>+1 &#40;2&#41; 345 6789</li>
                                <li>contact@yourdomain.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-xs-12">
                        <div className='px-5'>
                            <h4>company</h4>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to="">about us</Link>
                                </li>
                                <li>
                                    <Link to="">our teacher</Link>
                                </li>
                                <li>
                                    <Link to="">contact</Link>
                                </li>
                                <li>
                                    <Link to="">blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-xs-12">
                        <div className='px-5'>
                            <h4>links</h4>
                            <ul className='list-unstyled'>
                                <li> 
                                    <Link to="">courses</Link>
                                </li>
                                <li>
                                    <Link to="">events</Link>
                                </li>
                                <li>
                                    <Link to="">notice</Link>
                                </li>
                                <li>
                                    <Link to="">scholarship</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-xs-12">
                        <div className='px-5'>
                            <h4>support</h4>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to="">forums</Link>
                                </li>
                                <li>
                                    <Link to="">documentation</Link>
                                </li>
                                <li>
                                    <Link to="">language</Link>
                                </li>
                                <li>
                                    <Link to="">release status</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-xs-12">
                        <div className='px-5'>
                            <h4>recommend</h4>
                            <ul className='list-unstyled'>
                                <li> 
                                    <Link to="">wordpress</Link>
                                </li>
                                <li>
                                    <Link to="">learnpress</Link>
                                    </li>
                                <li> 
                                    <Link to="">wooCommerce</Link>
                                </li>
                                <li>
                                    <Link to="">bbpress</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div>
                            <p>Copyright © 2022 , designed 	&#38; developed by 
                            <a href="https://themefisher.com/"> Themefisher</a></p>
                        </div>
                    </div>
                    <div className="col-md-2 offset-md-4 col-sm-12">
                        <div className={styles.socialIcons}>
                            <ul className='list-unstyled d-flex align-items-center'>
                                <li>
                                    <a href="https://facebook.com/themefisher">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                            </li>
                                <li>
                                    <a href="https://twitter.com/themefisher">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                            </li>
                            <li>
                                <a href="https://github.com/themefisher">
                                    <i className="fa-brands fa-github-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/themefisher/">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Footer