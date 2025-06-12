import React from 'react';

function NavBar() {
    return (
            <nav class="navbar navbar-expand-lg bg-white border-bottom">
                <div class="container p-2">
                    <a class="navbar-brand" href='#'>
                    <img src='Media/Images/logo.svg' alt='Logo' style={{width:"20%"}} /> </a>
                    <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" a
                    ria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="navbar-nav" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="#" style={{color:"grey"}}>Signup</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" style={{color:"grey"}}>About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" style={{color:"grey"}}>Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" style={{color:"grey"}}>Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" style={{color:"grey"}}>Support</a>
                            </li>
                        </ul>
                        </form>
                    </div>
                    <div>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </div>
            </nav>
    );
}

export default NavBar;