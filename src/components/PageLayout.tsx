'use client';
import React, { Component } from 'react';
import Home from './Home';
import About from './About';

import { Gallery } from './Gallery';
import Contact from './Contact';
import '../../styles/styles.scss';
// import About from './About'
// import NavBar from './NavBar';
// import Gallery from './Gallery';
// import Contact from './Contact';

class PageLayout extends Component {
  render() {
    return (
      <div>
        {/* <NavBar />  */}
        <Home />
        <About />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default PageLayout;
