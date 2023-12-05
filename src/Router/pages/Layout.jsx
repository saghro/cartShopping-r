import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-primary '>
                <div className="container">
                    <Link to='/' className="navbar-brand">Logo</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/blogs' className="nav-link">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                {children}
            </div>
        </>
    );
}

export default Layout;
