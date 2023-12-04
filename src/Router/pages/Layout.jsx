import React from 'react';

function Layout(props) {
    return (
       <>
           <ul className="nav justify-content-center">
               <li className="nav-item">
                   <a className="nav-link active" href="/"> Home</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link" href="/blogs">Blogs</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link disabled" href="/contact">Contact</a>

               </li>
           </ul>
       </>
    );
}

export default Layout;