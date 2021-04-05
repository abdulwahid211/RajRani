import React, { Component } from 'react'
import MonotypeFont from '../../public/fonts/mtcorsva.ttf';
import ReactFontFace from 'react-font-face'
import { Link, scroller as scroll } from "react-scroll";

const styles = {
  Monotype: {
    fontFamily: 'Monotype Corsiva',
  }
};

let fontConfig = {
  file: [
    {
      fontFamily: 'Monotype Corsiva',
      file: MonotypeFont,
      fontType: 'truetype',
      fileLocal: 'Monotype Corsiva'
    },

  ]
}


class NavBar extends Component {

  state = {
    style: { position: 'absolute' },
  }


  showFixedNavBar = () => {
    this.setState({ style: { position: 'fixed', transitionTimingFunction: 'ease-out', transition: '0.8s', backgroundColor: 'rgba(156, 134, 87, 1)' } })
  }

  notShowFixedNavBar = () => {
    this.setState({ style: { position: 'absolute', backgroundColor: 'rgba(156, 134, 87, 0.45)' } })
  }

  render() {
    return (
      <nav id="nav" style={this.state.style}>
        <h1 style={styles.Monotype}>Raj Rani</h1>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onSetActive={this.notShowFixedNavBar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-68}
              duration={500}
              onSetActive={this.showFixedNavBar}
            >
              &nbsp;|&nbsp; About
          </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onSetActive={this.showFixedNavBar}
            >
              &nbsp;| &nbsp;Gallery
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={this.showFixedNavBar}
            >
              &nbsp;| &nbsp;Contact
            </Link>
          </li>

        </ul>
      </nav>
    )
  }
}


export default ReactFontFace(NavBar, fontConfig);;