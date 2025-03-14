import React from 'react';
import Facebook from '../../public/img/facebook.png';
import Instagram from '../../public/img/insta.png';

import WhiteFacebook from '../../public/img/facebookWhite.png';
import WhiteInstagram from '../../public/img/instaWhite.png';
import '../../styles/styles.scss';

const Contact = () => {
  const position: [number, number] = [51.505, -0.09];

  return (
    <div id="contact">
      <footer>
        <h1>Raj Rani</h1>

        <div className="social-media">
          <img
            id="facebook"
            src={WhiteFacebook.src}
            onMouseOver={(e) => (e.currentTarget.src = Facebook.src)}
            onMouseOut={(e) => (e.currentTarget.src = WhiteFacebook.src)}
            width="50"
            height="50"
          />

          <img
            id="insta"
            src={WhiteInstagram.src}
            onMouseOver={(e) => (e.currentTarget.src = Instagram.src)}
            onMouseOut={(e) => (e.currentTarget.src = WhiteInstagram.src)}
            width="50"
            height="50"
          />
        </div>

        <h3 className="address">
          <div id="first-address">102 High Street</div>
          <div id="second-address">London E6 3BL</div>
          Tel: 01675 87654
        </h3>

        <p className="author">© 2025 by Abdul Wahid</p>
      </footer>
    </div>
  );
};

export default Contact;
