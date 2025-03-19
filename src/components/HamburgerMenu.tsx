import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import '../../styles/styles.scss';
import { Link } from 'react-scroll';

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [openPanel, setOpenPanel] = useState<boolean>(false);

  return (
    <div id="hamburger-menu">
      <SlidingPane
        from={'right'}
        className="sliding-pane"
        isOpen={openPanel}
        width="400px"
        closeIcon={false}
        onRequestClose={() => {
          setOpenPanel(false);
          setOpen(false);
        }}
      >
        <div style={{ color: 'black' }}>
          <h1 style={{ color: 'black' }}>Menu</h1>
        </div>
      </SlidingPane>
      <div id="hamburger-icon">
        <Hamburger
          rounded
          toggled={isOpen}
          onToggle={(toggled) => {
            if (toggled) {
              setOpen(true);
              setOpenPanel(true);
            } else {
              setOpen(false);
              setOpenPanel(false);
            }
          }}
          color="white"
          size={48}
          direction="right"
          duration={0.8}
          distance="lg"
        />
      </div>
    </div>
  );
}
