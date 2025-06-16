import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row'>
                <h2 class='text-center'>People</h2>
                <div className='col-6 five text-center'>
                    <img  className="founder imager" style={{borderRadius:"100%", height: "295px", marginBottom:"10px"}} src='Media\Images\nithinKamath.jpg'></img>
                    <h5 className='mt-3'>Nithin Kamath</h5>
                    <p className="mt-3"style={{color:'gray'}}>Founder, CEO</p>
                   </div>
                <div className='col-6 mt-5 p-5' >
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href=''style={{textDecoration:'none'}} >Homepage </a> / <a href=''style={{textDecoration:'none'}}>TradingQnA</a> / <a href=''style={{textDecoration:'none'}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;