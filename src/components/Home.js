import React, { Component } from 'react'
import background1 from '../../public/img/hm1.jpg';
import background2 from '../../public/img/hm2.jpg';
import elephant from '../../public/img/rajrani_main_logo.png';
import arrow from '../../public/img/arrow.png';
import ReactFontFace from 'react-font-face'
import MonotypeFont from '../../public/fonts/mtcorsva.ttf';
import { Link } from "react-scroll";

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

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            currentBackground: background1
        }
    }


    componentDidMount() {
        this.SwitchBackgroundTimer();
        console.log("Hello Bitch ")

    }

    SwitchBackgroundTimer() {
        setInterval(() => {
            switch (this.state.count) {
                case 0: {
                    this.setState({ currentBackground: background2 })
                    this.setState((prevState) => { return { count: prevState.count + 1 } })
                    break;
                }
                case 1: {
                    this.setState({ currentBackground: background1 })
                    this.setState({ count: 0 })
                    break;
                }
                default: {
                    this.setState({ currentBackground: background1 })
                    break;
                }
            }
        }, 5000)
    }

    render() {
        return (
            <div id="home">
                <div id="background-image" style={{ backgroundImage: `url(${this.state.currentBackground})` }}>
                    <div className="main-content">
                        <img src={elephant} width="200" height="221" id="big-elephant"></img>
                        <h1 style={styles.Monotype} id="main-title">Raj Rani</h1>
                        <h2 style={styles.Monotype} id="sub-title">Takeaway</h2>
                        <button> ORDER ONLINE</button>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-68}
                            duration={500}
                        >
                            <img src={arrow} width="219" height="154" id="arrow"></img>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default ReactFontFace(Home, fontConfig);