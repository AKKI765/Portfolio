import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div>
        <div className="footer_details">
            <p> &#169; Atul Kumar</p>
            <p> Portfolio</p>
            <p className='Social-links-footer'>
                <a href="https://www.instagram.com/" className='"home__social-icon' target="">
                <i class="uil uil-instagram"></i>
                </a>
                <a href="https://github.com/" className='"home__social-icon' target="">
                <i class="uil uil-github"></i>
                </a>
                <a href="https://www.linkedin.com/" className='"home__social-icon' target="">
                <i class="uil uil-linkedin"></i>
                </a>
            </p>
        </div>
    </div>
  )
}

export default Footer;