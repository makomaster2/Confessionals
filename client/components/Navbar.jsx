import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav just-content-center p-2">
            <NavLink to="/"  className={({ isActive }) => `nav-link ${isActive && 'active'}`}>Home</NavLink>
            <NavLink to="/depression" className={({ isActive }) => `nav-link ${isActive && 'active'}`}>Depression</NavLink>
            <NavLink to="/adhd" className={({ isActive }) => `nav-link ${isActive && 'active'}`}>ADHD</NavLink>
            <NavLink to="/anxiety" className={({ isActive }) => `nav-link ${isActive && 'active'}`}>Anxiety</NavLink>
            <NavLink to="/rage" className={({ isActive }) => `nav-link ${isActive && 'active'}`}>Rage</NavLink>
        </div>
    );
};

export default Navbar;