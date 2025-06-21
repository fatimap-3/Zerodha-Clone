import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
            <nav class="navbar navbar-expand-lg bg-white border-bottom">
                <div class="container p-2">
                    <Link class="navbar-brand" to='/'>
                    <img src='Media/Images/logo.svg' alt='Logo' style={{width:"20%"}} /> </Link>
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
                                <Link class="nav-link active" to="/signup" style={{color:"grey"}}>Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about" style={{color:"grey"}}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/products-page" style={{color:"grey"}}>Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/pricing" style={{color:"grey"}}>Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/support" style={{color:"grey"}}>Support</Link>
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