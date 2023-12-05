import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        <>
            <nav className='navbar-dark bg-primary nav justify-content-center'>
                <ul className="nav">
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
            </nav>
            <div className="container mt-4">
                {children}
            </div>
        </>
    );
}

export default Layout;
