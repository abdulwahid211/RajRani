import React, { Component } from 'react'


export default class NavBar extends Component {

    render() {
        return (
            <nav className="Nav">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Gallery
                    </li>
                    <li>
                        Contact
                    </li>

                </ul>
            </nav>
        )
    }


}