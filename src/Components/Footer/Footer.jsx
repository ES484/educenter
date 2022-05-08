import React from 'react';
import styles from './Footer.module.css';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

function Footer(props) {
    const linksData = [
        {title: "company", link1: "about us", link2: "our teacher", link3: "contact", link4: "blog",
        href1: "about", href2: "teachers", href3: "contact", href4: "news"},
        {title: "links", link1: "courses", link2: "events", link3: "notice", link4: "scholarship",
        href1: "courses", href2: "events", href3: "notice", href4: "scholarship"}
    ]
    const outSideLinks = [
        {title: "support", link1: "forums", link2: "documentation", link3: "language", link4: "release status",
        href1: "https://themefisher.com/blog", href2: "https://docs.themefisher.com", href3: "https://themefisher.com", href4: "https://themefisher.com"},
        {title: "recommend", link1: "wordpress", link2: "learnpress", link3: "wooCommerce", link4: "bbpress",
        href1: "https://themefisher.com", href2: "https://themefisher.com", href3: "https://themefisher.com", href4: "https://themefisher.com"}
    ]
    const socialLinks = [
        {link: "tel:+443003030266", icons: ""}, 
        {link: "https://facebook.com/themefisher", icons: "fa-brands fa-facebook-f"},
        {link: "https://twitter.com/themefisher", icons: "fa-brands fa-twitter"}, 
        {link: "https://github.com/themefisher", icons: "fa-brands fa-github-alt"},
        {link: "https://instagram.com/themefisher", icons: "fa-brands fa-instagram"}
      ]
  return (
    <React.Fragment>{props.userData?<div>
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
                            <Link to="home">
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
                    {linksData.map((linkData, idx)=> <div className="col-lg-2 col-sm-6 col-xs-12" key={idx}>
                        <div className='px-5'>
                            <h4>{linkData.title}</h4>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to={linkData.href1}>{linkData.link1}</Link>
                                </li>
                                <li>
                                    <Link to={linkData.href2}>{linkData.link2}</Link>
                                </li>
                                <li>
                                    <Link to={linkData.href3}>{linkData.link3}</Link>
                                </li>
                                <li>
                                    <Link to={linkData.href4}>{linkData.link4}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>)}
                    {outSideLinks.map((outSideLink, idx)=> <div className="col-lg-2 col-sm-6 col-xs-12" key={idx}>
                        <div className='px-5'>
                            <h4>{outSideLink.title}</h4>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href={outSideLink.href1}>{outSideLink.link1}</a>
                                </li>
                                <li>
                                    <a href={outSideLink.href2}>{outSideLink.link2}</a>
                                </li>
                                <li>
                                    <a href={outSideLink.href3}>{outSideLink.link2}</a>
                                </li>
                                <li>
                                    <a href={outSideLink.href4}>{outSideLink.link2}</a>
                                </li>
                            </ul>
                        </div>
                    </div>)}
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
                            {socialLinks.map((aLink, idx)=>
                                <li key={idx}>
                                <a href={aLink.link} target="_blank" rel="noopener noreferrer">
                                <i className={aLink.icons}></i>
                                </a>
                            </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>:''}
    </React.Fragment>
  )
}

export default Footer