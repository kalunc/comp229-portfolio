/* 
File name: skills.js
Student's Name: Ka Lun Cheung
StudentID: 301341904
Date: 2024-05-25
*/

import React from "react";
import './skills.css';
import GeneralProgramming from '../../assets/general-programming.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import DatabaseDesign from '../../assets/database-design.png';


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Services</span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={GeneralProgramming} alt="GeneralProgramming" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>C++/Java</h2>
                        <p>Creation of custom desktop, web, and mobile applications using C++ and Java.</p>
                    </div>
                </div>
            </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>Building the visual and interactive aspects of websites using HTML, CSS, JavaScript, and related frameworks (e.g., React, Angular, Vue.js).</p>
                    </div>
                </div>
            </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Mobile App Design</h2>
                        <p>Native and cross-platform mobile app development using Swift, Kotlin, React Native, Flutter, and other technologies.</p>
                    </div>
                </div>
            </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={DatabaseDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Database Design</h2>
                        <p>Database design services involve creating structured and efficient frameworks to store, manage, and retrieve data, ensuring scalability, security, and optimal performance for various business applications.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills;