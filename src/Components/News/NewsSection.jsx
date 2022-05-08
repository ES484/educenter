import React from 'react';
import News from './News';
function NewsSection() {
  return (
    <React.Fragment>
        <div className='mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h2>latest news</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <News/>
    </React.Fragment>
  )
}

export default NewsSection