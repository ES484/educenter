import React from 'react';
import styles from './Contact.module.css';
import { Wrapper } from "@googlemaps/react-wrapper";
function Contact() {
  return (
    <React.Fragment>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <h2 className={styles.contactTitle}>contact us</h2>
                    </div>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-md-6">
                    <div>
                        <form>
                            <input className='form-control p-3 mb-3' type="text" name="name" id="name" placeholder='Your Name' />
                            <input className='form-control p-3 mb-3' type="email" name="email" id="email" placeholder='Your Email'/>
                            <input className='form-control p-3 mb-3' type="text" name="subject" id="subject" placeholder='Subject'/>
                            <textarea className='form-control p-3 mb-3' name="message" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                            <button className='sendMsg'>send message</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.contactContent}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt. Dolore, labore. Accusamus nulla sed cum aliquid exercitationem debitis error harum porro maxime quo iusto aliquam dicta modi earum fugiat, vel possimus commodi, deleniti et veniam, fuga ipsum praesentium. Odit unde optio nulla ipsum quae obcaecati! Quod esse natus quibusdam asperiores quam vel, tempore itaque architecto ducimus expedita</p>
                        <a href="tel:+8802057843248">+8802057843248</a>
                        <a href="mailto:yourmail@email.com" target="_blank" rel="noopener noreferrer" className='pb-4'>yourmail@email.com</a>
                        <span className='pb-2'>71 Shelton Street</span>
                        <span>London WC2H 9JQ England</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='pb-5'>
            <div className={styles.mapouter}>
                <div className={styles.gmap_canvas}>
                    <iframe className='w-100' id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" title='map'></iframe>
            </div>
           </div>
        </div>
    </React.Fragment>
  )
}

export default Contact