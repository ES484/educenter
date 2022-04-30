import React from 'react';
import {Link} from 'react-router-dom';
import './FirstNavbar.module.css';
function NavAndHeader() {
  return (
    <React.Fragment>
              <div className='container'>
                <div className='row mt-3 justify-content-between'>
                  <div className='col-lg-4 col-md-12'>
                    <div>
                      <ul className='list-unstyled'>
                        <li>
                          <a href="tel:+443003030266">call +44 300 303 0266</a>
                        </li>
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
                  <div  className='col-lg-5 col-md-12'>
                    <div>
                      <ul className='list-unstyled'>
                          <li>
                            <Link to="">notice</Link>
                          </li>
                          <li>
                            <Link to="">research</Link>
                          </li>
                          <li>
                            <Link to="">scholarship</Link>
                          </li>
                          <li>
                            <Link to="">login</Link>
                          </li>
                          <li>
                            <Link to="">register</Link>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
    </React.Fragment>
  )
}

export default NavAndHeader;
