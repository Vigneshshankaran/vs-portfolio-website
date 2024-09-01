import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vigneshganesha@gmail.com" className="home__social-icon" target="_blank" rel="noreferrer">
                <IoIosMail />
            </a>
            <a href="https://github.com/Vigneshshankaran" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/vignesh-shankaran-75695941/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;
