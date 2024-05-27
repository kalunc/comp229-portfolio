/* 
File name: project.js
Student's Name: Ka Lun Cheung
StudentID: 301341904
Date: 2024-05-25
*/

import React from "react";
import './projects.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.png';



const Projects = () => {
    return (
        <section id='projects'>
            <span className="projectTitle">My Projects</span>

            <div className="projectBars">
                <div className="projectBar">
                    <img src={Project1} alt="Project1" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Smart Retail System Design</h2>
                        <h3>Responsibilities:</h3>
                        <p>Designing an retail management system that leverages IoT and data analytics to enhance customer experience and operational efficiency.</p>
                        <h3>Outcomes:</h3>
                        <p>Identified key components such as inventory management, customer engagement, sales analytics, and in-store navigation. Developed detailed system diagrams and workflows to illustrate the interaction between components.</p>
                    </div>
                </div>
            </div>
            
            <div className="projectBars">
                <div className="projectBar">
                    <img src={Project2} alt="Project2" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Movie Rental Store Database Design</h2>
                        <h3>Responsibilities:</h3>
                        <p>Designing a robust database system to manage the store's operations efficiently. This involved understanding the business requirements, creating a comprehensive data model, and ensuring data integrity and optimal performance.</p>
                        <h3>Outcomes:</h3>
                        <p>A fully functional, efficient, and scalable database system that streamlined the movie rental store’s operations.</p>
                    </div>
                </div>
            </div>

            <div className="projectBars">
                <div className="projectBar">
                    <img src={Project3} alt="Project3" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Workspace Booking System Design</h2>
                        <h3>Responsibilities:</h3>
                        <p>Designing a comprehensive system to manage workspace reservations, optimize office space utilization, and enhance the user experience for employees. The system was designed to accommodate the flexible and dynamic needs of modern workplaces.</p>
                        <h3>Outcomes:</h3>
                        <p>Project in progress.</p>
                    </div>
                </div>
            </div>

            
           

        </section>
    )
}

export default Projects;