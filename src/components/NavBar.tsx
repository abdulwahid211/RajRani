import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../../styles/styles.scss';

const NavBar = () => {
  const [navStyle, setNavStyle] = useState<React.CSSProperties>({
    position: 'absolute',
    backgroundColor: 'rgba(156, 134, 87, 0.45)',
    transitionTimingFunction: 'ease-out',
    transition: '0.8s',
  });

  const showFixedNavBar = () => {
    setNavStyle({
      position: 'fixed',
      transitionTimingFunction: 'ease-out',
      transition: '0.8s',
      backgroundColor: 'rgba(156, 134, 87, 1)',
    });
  };

  const notShowFixedNavBar = () => {
    setNavStyle({
      position: 'absolute',
      backgroundColor: 'rgba(156, 134, 87, 0.45)',
      transitionTimingFunction: 'ease-out',
      transition: '0.8s',
    });
  };

  return (
    <nav id="nav" style={navStyle}>
      <h1>Raj Rani</h1>
      <ul>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={800} onSetActive={notShowFixedNavBar}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-68} duration={500} onSetActive={showFixedNavBar}>
            &nbsp;|&nbsp; About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-75} duration={500} onSetActive={showFixedNavBar}>
            &nbsp;| &nbsp;Gallery
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} onSetActive={showFixedNavBar}>
            &nbsp;| &nbsp;Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
