'use client';
import React, { useEffect, useState } from 'react';
import elephant from '../../public/img/rajrani_main_logo.png';
import arrow from '../../public/img/arrow.png';
import background1 from '../../public/img/hm1.jpg';
import background2 from '../../public/img/hm2.jpg';
import { Link } from 'react-scroll';
import { StaticImageData } from 'next/image';
import '../../styles/styles.scss';

export default function Home() {
  const [currentBackground, setCurrentBackground] = useState<StaticImageData>(background1);

  useEffect(() => {
    const backgrounds = [background1, background2];
    let current = 0;
    setCurrentBackground(backgrounds[current]);
    var interval = setInterval(() => {
      current = (current + 1) % backgrounds.length;
      setCurrentBackground(backgrounds[current]);
    }, 3000);
  }, []);

  return (
    <div id="home">
      <div id="home-content">
        <div id="home-background-container">
          <img src={currentBackground.src} id="home-background"></img>
        </div>

        <div id="home-info">
          <img src={elephant.src} width="200" height="221" id="big-elephant"></img>
          <h1 id="main-title">Raj Rani</h1>
          <h2 id="sub-title">Takeaway</h2>
          <button> ORDER ONLINE</button>
          <Link to="about" spy={true} smooth={true} offset={-68} duration={500}>
            <img src={arrow.src} width="60" height="60" id="arrow"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
