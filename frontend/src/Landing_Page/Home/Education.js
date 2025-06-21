import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='Media\Images\education.svg' style={{width:"70%"}} />
                </div>
                <div className='col-6'>
                    <h3 className='mb-5 fs-2'>Free and open market education</h3>
                    <p className='mb-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advance trading.</p>
                    <a href="" style={{ textDecoration: "none" }}>
                    Versity{" "}
                    <i className="fa fa-long-arrow-right"></i></a>
                    <p className='mt-5'>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{ textDecoration: "none" }}>
                     Trading Q&A{" "}
                    <i className="fa fa-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;