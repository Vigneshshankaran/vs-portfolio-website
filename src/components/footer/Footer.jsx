import React from 'react';
import "./footer.css";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Vignesh Shankaran</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vigneshganesha@gmail.com" className="home__social-icon" target="_blank" rel="noreferrer">
                <IoIosMail  />
            </a>
                <a href="https://github.com/Vigneshshankaran" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="hhttps://www.linkedin.com/in/vignesh-shankaran-75695941/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;