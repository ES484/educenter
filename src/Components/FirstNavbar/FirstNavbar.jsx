import React from 'react';
import {Link} from 'react-router-dom';
import './FirstNavbar.module.css';
function FirstNavbar(props) {
  const socialLinks = [
    {link: "tel:+443003030266", icons: ""}, 
    {link: "https://facebook.com/themefisher", icons: "fa-brands fa-facebook-f"},
    {link: "https://twitter.com/themefisher", icons: "fa-brands fa-twitter"}, 
    {link: "https://github.com/themefisher", icons: "fa-brands fa-github-alt"},
    {link: "https://instagram.com/themefisher", icons: "fa-brands fa-instagram"}
  ]
  const otherLinks = [
    {link: "notice"},
    {link: "research"},
    {link: "scholarship"}
  ]
  return (
    <React.Fragment>
              <div className='container'>
                <div className='row mt-3 justify-content-between'>
                  <div className='col-lg-4 col-md-12'>
                    <div>
                      <ul className='list-unstyled'>
                        {socialLinks.map((aLink, idx)=>
                        <li key={idx}>
                        <a href={aLink.link} target="_blank" rel="noopener noreferrer">
                          <i className={aLink.icons}></i>
                        </a>
                      </li>)}
                      </ul>
                    </div>
                  </div>
                  <div  className='col-lg-5 col-md-12'>
                    <div>
                      <ul className='list-unstyled'>
                        {props.userData? <>
                          {otherLinks.map((otherLink, idx)=>
                          <li key={idx}>
                            <Link to={otherLink.link}>{otherLink.link}</Link>
                          </li>)}
                          <li className="nav-item">
                            <span onClick={props.logOut}>Logout</span>
                          </li>
                          </>: <>
                          <li>
                            <Link to="login">login</Link>
                          </li>
                          <li>
                            <Link to="register">register</Link>
                          </li></>}
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
    </React.Fragment>
  )
}

export default FirstNavbar;
