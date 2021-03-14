import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import background1 from '../../public/img/hm1.jpg';
import background2 from '../../public/img/hm2.jpg';
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            currentBackground: background1,
            fadeIn: keyframes`0% {opacity: 0;} 90% {opacity: 1;}`
        }
    }


    componentDidMount() {
        this.SwitchBackgroundTimer();
        console.log("Hello Bitch ")

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updated " + prevState.count)
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

    componentWillUnmount() {
        // we set the timeout to this.turnOffRedTimeout so that we can
        // clean it up when the component is unmounted.
        // otherwise you could get your app trying to modify the state on an
        // unmounted component, which will throw an error
        // clearTimeout(this.makeTimer)
        clearTimeout(this.makeTimer())
        console.log("Removed Bitch ")
    }

    render() {
// https://stackoverflow.com/questions/52507110/implementing-transition-effects-in-react-js-when-state-changes
        const FadeInBackground = styled.div`animation: ${this.state.fadeIn} 5s;`;
        
        return (
            <FadeInBackground>
                <div className="home-container" style={{ backgroundImage: `url(${this.state.currentBackground})` }}>
                    <h1>Raj Rani</h1>
                </div>
            </FadeInBackground>

        );
    }
}


export default Home;