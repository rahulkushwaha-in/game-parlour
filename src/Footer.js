import React from "react";
import { Link } from "react-router-dom";
import "./css/FooterCss.css";
function Footer()
{
    return(
        <footer className="footerdiv">
        <div className="footer-left">
            <h1>Game_Parlour</h1>

            <div className="social-icons">
                <a href="https://linkedin.com/in/rahulkushwaha1" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin" ></i></a>
                <Link to=""><i class="fa-solid fa-envelope"></i></Link>
                <Link to=""><i class="fa-brands fa-instagram"></i></Link>
            </div>
        </div>

        <div className="footer-right">
            <ul>
                <li><Link to="">About</Link></li>
                <li><Link to="">Contact</Link></li>
                <li><Link to="">Policy</Link></li>
            </ul>
        </div>

    </footer>
    );
}


export default Footer;