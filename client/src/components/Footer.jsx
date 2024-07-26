import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer__container">
      <div className="social__media__footer">
        <div className="image__name__footer">
          <img
            className="footer__img"
            src="./src/assets/image.webp"
            alt="image__footer"
          />
          <h3 className="name__footer">White Label</h3>
        </div>

        <div className="icon__copyright__footer">
          <div className="icon__footer">
          <FontAwesomeIcon
            className="icon__footer"
            icon={faInstagram}
            size="1x"
          />
          <FontAwesomeIcon
            className="icon__footer"
            icon={faFacebook}
            size="1x"
          />
          <FontAwesomeIcon
            className="icon__footer"
            icon={faTwitter}
            size="1x"
          />
          </div>
          <span>
            Copyright © 2027 by White Label, Inc. All rights reserved.
          </span>
        </div>
      </div>

      <div className="contact__us__footer">
        <h3>Contact Us</h3>
        <span>623 Harrison St., 2nd Floor, San Francisco, CA 94107</span>
        <span>415-201-6370</span>
        <span>White.Label@gmail.com</span>
      </div>
      <div className="account__footer">
        <h3>Account</h3>
        <span>Create Account</span>
        <span>Sign in </span>
        <span>iOS app</span>
        <span>Android App</span>
      </div>
      <div className="about__us__footer">
        <h3>Company</h3>
        <span>About White Labes</span>
        <span>For Business</span>
        <span>E-services partners</span>
        <span>Careers</span>
      </div>
      <div className="resources__footer">
        <h3>Resources</h3>
        <span>E-services directory</span>
        <span>Help center</span>
        <span>Privacy & terms</span>
      </div>
    </div>
  );
}

export default Footer;
