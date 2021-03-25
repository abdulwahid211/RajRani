import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import NavBar from './NavBar';

class Layout extends Component {
    render() {
        return (
            <div>
                <NavBar /> 
                <Home />
                <About />
            </div>
        );
    }
}

export default Layout;