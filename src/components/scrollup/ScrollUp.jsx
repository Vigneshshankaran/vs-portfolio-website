import React, { useEffect } from 'react';
import './scrollup.css';
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (window.scrollY >= 560) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

    return (
        // Option 1: Use a valid href attribute (if you have an element with id="top" at the top of your page)
        // <a href="#top" className="scrollup"><HiOutlineArrowSmUp className="scrollup__icon"/></a>

        // Option 2: Use a button for the scroll-up functionality
        <button className="scrollup" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <HiOutlineArrowSmUp className="scrollup__icon" />
        </button>
    );
}

export default ScrollUp;
