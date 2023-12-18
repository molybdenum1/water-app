// import React from 'react'
import { Link } from "react-router-dom";

import huawei from "../../assets/img/huawei.jpg";
import appStore from "../../assets/img/app_store.jpg";
import googlePlay from "../../assets/img/google_play.jpg";
import visa from "../../assets/img/visa.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="get-app">
          <h3>Get the app</h3>
          <p>
            Oasis Direct App is now available in <br />
            Google Play,App Store, and AppGallery.
            <br /> Get it Now!
          </p>
          <div className="get-app_imgs">
            <img src={googlePlay} alt="google play" width={140} />
            <img src={appStore} alt="app store" width={140} />
            <img src={huawei} alt="huawei" width={140} />
            <img src={visa} alt="visa" width={140} />
          </div>
        </div>
        <div className="contact-info">
          <h3>Contact information</h3>
          <div className="info">
            <h4>ADDRESS</h4>
            <p>
              Oasis Pure Water Factory LLC Jebel Ali Dubai,
              <br /> United Arab Emirates
            </p>
            <h4>TEL</h4>
            <p>600522261</p>
            <h4>EMAIL</h4>
            <p>Oasis.H2o@Nfpc.Net</p>
          </div>
        </div>
        <div className="collection">
          <h3>Collections</h3>
          <div className="collection-links">
            <p><Link className="collection-link" to='/water'>Water</Link></p>
            <p><Link className="collection-link" to='/juice'>Juice</Link></p>
            <p><Link className="collection-link" to='/dairy'>Dairy</Link></p>
            <p><Link className="collection-link" to='/accessories'>Accessories</Link></p>
          </div>
        </div>
        <div className="information">
          <h3>Information</h3>
            <div className="information-links">
                <p className="information-link" to='/about'>About Us</p>
                <p className="information-link" to='/contact'>Contact Us</p>
                <p className="information-link" to='/terms'>Terms & Conditions</p>
                <p className="information-link" to='/privacy'>Privacy Policy</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
