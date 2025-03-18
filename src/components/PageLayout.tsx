'use client';
import React, { Component } from 'react';
import Home from './Home';
import About from './About';

import { Gallery } from './Gallery';
import Contact from './Contact';
import '../../styles/styles.scss';
import NavBar from './NavBar';
import HamburgerMenu from './HamburgerMenu';

class PageLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HamburgerMenu />
        <Home />
        <About />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default PageLayout;
