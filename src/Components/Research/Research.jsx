import React from 'react';
import styles from './Research.module.css';
import research1 from '../images/research/research-1.jpg';
import research2 from '../images/research/research-2.jpg';
import research3 from '../images/research/research-3.jpg';
import research4 from '../images/research/research-4.jpg';
import research5 from '../images/research/research-5.jpg';
import research6 from '../images/research/research-6.jpg';

function Research() {
    const reseachData= [
        {title:"geography", imgUrl: research1},
        {title:"mathematical", imgUrl: research2},
        {title:"humanities", imgUrl: research3},
        {title:"geographysical & sciences", imgUrl: research4},
        {title:"biological sciences", imgUrl: research5},
        {title:"archaeology", imgUrl: research6}
    ]
  return (
    <React.Fragment>
        <div className="container pt-5">
            <div className="row gy-5">
                {reseachData.map((researchItem, idx)=><div className="col-md-4" key={idx}>
                <div className= {`card h-100 border-0 ${styles.researchItem}`}>
                    <img src={researchItem.imgUrl} className="card-img-top" alt={researchItem.title}/>
                    <div className="card-body">
                        <h3>{researchItem.title}</h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                </div>)}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Research