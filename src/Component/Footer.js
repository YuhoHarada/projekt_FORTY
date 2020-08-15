import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footerText">
                <h3>Genuss Hat viele Facetten</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur, quia delectus pariatur doloremque a quos quod, quasi qui, quo ratione magni. Tempora veritatis accusamus nam, obcaecati reiciendis doloremque voluptate!</p>


                <div className="arrowToTopWrap">
                    <a href="#hero"><i className="fas fa-chevron-up toTopArrow"></i></a>
                </div>

            </div>

            <div className="footerBottomWrap">
                <ul className="socialIconsWrap">
                    <li>
                        <a href="https://twitter.com/home" target="_blank"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                    </li>
                </ul>

                <ul className="footerLinksWrap">
                    <li><a href="#">KONTAKT</a></li>
                    <li><a href="#">IMPRESSUM</a></li>
                    <li><a href="#">DATENSCHUTZ</a></li>
                </ul>

                <div className="logoWrap">
                    {/* <a className="logoFooter" href="#hero"><img src="/FRTY-Logo.svg" alt="logo" /></a> */}
                    {/* <h3>Cheers!</h3> */}
                </div>


            </div>

            <img className="footerPhoto" src="/footer_drinkfreigestellt.png" alt="" />
        </footer>
    );
}

export default Footer;