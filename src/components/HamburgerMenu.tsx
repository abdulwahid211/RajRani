import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import '../../styles/styles.scss';

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [openPanel, setOpenPanel] = useState<boolean>(false);

  return (
    <div id="hamburger-menu">
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
        ;
      </div>
      <SlidingPane from={'right'} isOpen={openPanel} width="200px" onRequestClose={() => setOpenPanel(false)}>
        <div></div>
      </SlidingPane>
    </div>
  );
}
