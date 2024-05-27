/* 
File name: contact.js
Student's Name: Ka Lun Cheung
StudentID: 301341904
Date: 2024-05-25
*/

import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <section id="contactPage">
            <div id ="contact">
                <h1 className="contactPageTitle">Contact Me</h1>

                <div className="contactInfo">
                    <p>Email: kalunc@gmail.com</p>
                    <p>Phone: (647) 395-0166</p>                    
                </div>



                <span className="contactDesc">Please fill out the below to discuss any work opportunities</span>
                <form className="contactForm">
                    <input type="text" className="firstname" placeholder="Your First Name" />
                    <input type="text" className="lastname" placeholder="Your Last Name" />
                    <input type="text" className="contactnumber" placeholder="Your Contact Number" />
                    <input type="text" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="sumbit" value="Send" className="submitBtn">Submit</button>

                </form>
            </div>
        </section>

    )
}

export default Contact;