import React, { Component } from 'react'


export default class NavBar extends Component {

    render() {
        return (
            <nav id="nav">
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