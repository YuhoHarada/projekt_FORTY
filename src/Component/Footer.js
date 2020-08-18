import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footerText">
                <h3>Human creativity applied to the world of drinks</h3>
                <p>Many different types of mixed drink recipes come from all over the world and that is why the variety is so immense.   Cocktails can be enjoyed with all your senses. In addition to the taste, various colors and aromas together awake completely new associations, and subconsciously also influence the taste.
                But don't overdo it! Drinking cocktail is a pleasure that must be sipped slowly to savor every nuance.
                 <span className="lineBreak">Let’s start mixing! Cheers! </span>
                </p>
                <div className="arrowToTopWrap">
                    <a href="#hero"><i className="fas fa-chevron-up toTopArrow"></i></a>
                </div>
            </div>
            <div className="footerBottomWrap">
                <ul className="socialIconsWrap">
                    <li>
                        <a href="https://twitter.com/home" target="_blank"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                    </li>
                </ul>
                <ul className="footerLinksWrap">
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">IMPRESSUM</a></li>
                    <li><a href="#">PRIVACY</a></li>
                </ul>

                <div className="emptyGridItem"></div>
            </div>
            <img className="footerPhoto" src="/footer_drinkfreigestellt.png" alt="" />
        </footer>
    );
}

export default Footer;