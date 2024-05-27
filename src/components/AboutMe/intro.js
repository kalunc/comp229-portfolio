import React from "react";
import './intro.css';
import bg from '../../assets/image.png'

import btnImg from '../../assets/resume.png'

import resumePdf from '../../assets/resume.pdf';

const Intro = () => {

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ka Lun Cheung</span> <br />Network Engineer, <br />Software Engineering Student</span>
                <p className="introPara">Before I come to Canada I am a Network Engineer. <br />Now I am a Software Engineering Student of Centennial College</p>
                
                <a href={resumePdf} target="_blank" rel="noreferrer" className="resume">
                    <img src={btnImg} alt="Download Resume" className="btnImg" />
                </a>

            </div>
            <img src={bg} alt="" className="bg" />
        </section>
    )
}

export default Intro;