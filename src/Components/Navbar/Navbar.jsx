import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../images/logo.png';
function Navbar() {
    useEffect(()=>{function handleBackgroudChange()
        {
          if(window.innerWidth < 991)
          {
            document.getElementById("navbarSupportedContent").style.backgroundColor="#1A1A37";
          }
          else {
            document.getElementById("navbarSupportedContent").style.backgroundColor="#FFBC3B";
          }
        }
        window.addEventListener("resize", handleBackgroudChange);
      }, []);
  return (
    <React.Fragment>
         <nav className="navbar navbar-expand-lg navbar-dark m-0 p-0" id="navMain">
                <div className={`${styles.mainNav} p-0 container-fluid align-items-lg-stretch w-100`}>
                  <div className="ps-5 py-3">
                    <Link className="navbar-brand" to="home">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                  <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className={`collapse navbar-collapse ${styles.navLinks}`} id="navbarSupportedContent">
                    <ul className="navbar-nav px-5 mb-lg-0 text-center">
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="home">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="about">about</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="courses">courses</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="events">events</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="news">blog</Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link className="nav-link" to="#">pages</Link>
                      </li> */}
                      <li className="nav-item">
                        <Link className="nav-link" to="#">contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
    </React.Fragment>
  )
}

export default Navbar