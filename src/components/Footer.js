import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
const Footer = () => {
  return (
    <footer className="footer ">
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <div className="footer__logo">
                  <Link className="" to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <div className="social-media__icons-box">
                  <a href="" target="_blank">
                    <i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.facebook.com/saradiqSA/" target="_blank">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com/saradiqSA" target="_blank">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.instagram.com/saradiqsa" target="_blank">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="footer__list">
                  <li>الرئيسية</li>
                  <li><Link to='/events' className='footer__list-link'>الفعاليات</Link></li>
                  <li><Link className='footer__list-link'>الإنجازات</Link></li>
                  <li><Link className='footer__list-link'>منتجات سرادق</Link></li>
                  <li><Link className='footer__list-link'>تواصل معنا</Link></li>
                  <li><Link className='footer__list-link'>الانضمام لفريق العمل</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="contact d-flex flex-column align-items-right">
                <p>
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                  0566517161
                </p>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  04182227073
                </p>
                <p>
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  asmaa.alshanqiti@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rights mt-5  d-flex justify-content-center">
          <p>جميع الحقوق محفوظة لشركة سرادق 2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
