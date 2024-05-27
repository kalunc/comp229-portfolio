/* 
File name: navbar.js
Student's Name: Ka Lun Cheung
StudentID: 301341904
Date: 2024-05-25
*/

import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active"  to="home" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active"  to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About Me</Link>                
                <Link activeClass="active"  to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Services</Link>
                <Link activeClass="active"  to="projects" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({behavior: "smooth"});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>

        </nav>
        
    )
}

export default Navbar;