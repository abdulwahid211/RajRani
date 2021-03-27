import React, { Component } from 'react'
import elephant from '../../public/img/rajrani_about.png';
import ReactFontFace from 'react-font-face'
import MonotypeFont from '../../public/fonts/mtcorsva.ttf';

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


class About extends Component {
  render() {

    return (
      <div id="about-content">

        <img src={elephant} width="500" height="513" id="about-elephant"></img>
        <div id="about-text">
          <p >At Rajrani takeaway we aim to please our customers by taking great measures for quality and value.
          We believe in fresh food that you will enjoy. Our strength is our experience and providing an amazing service is our moral duty.
        Why not try us and give your verdict?</p>
        </div>
      </div>

    );
  }
}

export default  ReactFontFace(About, fontConfig);