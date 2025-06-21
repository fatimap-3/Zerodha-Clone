import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div  className='row'>
                <div className='col-md-6 p-5'>
                <img src='Media/Images/largestBroker.svg' alt='Awards Image'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'> 2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 mb-4' >
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6 mb-4'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                         </div>
                    <img src='Media/Images/pressLogos.png' style={{width:"90%"}} />
            </div>
            </div>
            </div>
        
     );
}

export default Awards;