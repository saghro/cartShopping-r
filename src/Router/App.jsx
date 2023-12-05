import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout><Home /></Layout>} />
                <Route path='/blogs' element={<Layout><Blogs /></Layout>} />
                <Route path='/contact' element={<Layout><Contact /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}
