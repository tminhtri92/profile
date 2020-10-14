import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faTwitter,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3 className="heading">Created by Jonny Tri</h3>
      <a href="https://www.linkedin.com/in/ta-minh-tri-6bb219142/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/tminhtri92" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://mobile.twitter.com/Taminhtri92" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.facebook.com/taminhtrikmt" className="twitter social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  );
}