// Footer.js
import React from 'react';

const Footer = () => (
  <footer>
  

    <div className='footer-section'>


    <div className="footer-one">
      <h4>About Us</h4>
     <p>we are a passionate team</p>
     <p>dedicated to providing the best</p>
     <p>service to our customers</p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <a href="/">Home</a>
      <a href="/">Services</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
    </div>



    <div id="z-index" className="newsletter">
    <h2>Subscribe</h2>
    <p>Get the latest updates and news right in your inbox!</p>
    <input type="email" placeholder="Enter your email" />
    <button>Subscribe</button>
  </div>


    </div>

<hr></hr>
<p className='copyright'>&copy; 2024 Your Company All Rights Reserved.</p>
  </footer>
);

export default Footer;
