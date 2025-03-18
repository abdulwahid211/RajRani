import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import '../../styles/styles.scss';

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <div id="hamburger-menu">
      <div id="hamburger-icon">
        <Hamburger
          rounded
          toggled={isOpen}
          toggle={() => {
            setOpen(!isOpen);
            setOpenPanel(!openPanel);
          }}
          color="white"
          size={40}
          direction="right"
          duration={0.8}
          distance="lg"
        />
        ;
      </div>
      <SlidingPanel type={'left'} isOpen={openPanel} size={30}>
        <div>
          <div>My Panel Content</div>
        </div>
      </SlidingPanel>
    </div>
  );
}
