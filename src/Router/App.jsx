import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";

export default function App() {
    return (
       <BrowserRouter>
           <Routes>
               <Route path='/' element={<Layout/>}></Route>
           </Routes>

       </BrowserRouter>
    );
}

