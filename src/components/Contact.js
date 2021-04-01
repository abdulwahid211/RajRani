import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Facebook from '../../public/img/facebook.png';
import Instagram from '../../public/img/insta.png';

import WhiteFacebook from '../../public/img/facebookWhite.png';
import WhiteInstagram from '../../public/img/instaWhite.png';

import ReactFontFace from 'react-font-face'
import MonotypeFont from '../../public/fonts/mtcorsva.ttf';
import 'leaflet/dist/leaflet.css';
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


class Contact extends Component {

  render() {

    return (
      <div className="contact" >
        <MapContainer center={[51.505, -0.09]} zoom={20} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              Raj Rani <br></br>102 High Street <br></br>  London E6 3BL  
        </Popup>
          </Marker>
        </MapContainer>
        <footer>

          <h1 style={styles.Monotype}>Raj Rani</h1>

          <div className="social-media">
            <img id="facebook" src={WhiteFacebook}
              onMouseOver={e => e.currentTarget.src = Facebook}
              onMouseOut={e => e.currentTarget.src = WhiteFacebook}
              width="50" height="50" />


            <img id="insta" src={WhiteInstagram}
              onMouseOver={e => e.currentTarget.src = Instagram}
              onMouseOut={e => e.currentTarget.src = WhiteInstagram}
              width="50" height="50" />

          </div>

          <h3 className="address" >

            <div id="first-address">

              102 High Street

           </div>

            <div id="second-address">

              London E6 3BL

            </div>

             Tel: 01675 87654

           </h3>


          <p className="author" >
            © 2021 by Abdul Wahid
            </p>

        </footer>


      </div>
    );
  }
}

export default ReactFontFace(Contact, fontConfig);