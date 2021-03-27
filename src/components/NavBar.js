import React, { Component } from 'react'
import MonotypeFont from '../../public/fonts/mtcorsva.ttf';
import ReactFontFace from 'react-font-face'


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

    render() {
        return (
            <nav id="nav">
             <h1 style={styles.Monotype}>Raj Rani</h1>
                <ul>
                    <li>
                        Home  
                    </li>
                    <li>
                    &nbsp;|&nbsp; About  
                    </li>
                    <li>
                    &nbsp;| &nbsp;Gallery   
                    </li>
                    <li>
                    &nbsp;| &nbsp;Contact  
                    </li>

                </ul>
            </nav>
        )
    }
}


export default  ReactFontFace(NavBar, fontConfig);;