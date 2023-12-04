import React from 'react';
import {Link} from "react-router-dom";

function Layout() {
    return (
       <>
        <nav>
            <ul className="nav justify-content-center">
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
       </>
    );
}

export default Layout;