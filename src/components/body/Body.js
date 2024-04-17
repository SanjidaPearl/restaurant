import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';

const Body = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<RootRedirect />} />
        </Routes>
    );
}

const RootRedirect = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate('/home');
    }, []);

    return null;
}

export default Body;
