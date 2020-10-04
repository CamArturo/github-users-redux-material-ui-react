import React from 'react'
import Image from '../assets/github-cards.png'

function Header() {
    return (
        <div>
            <header>
                <div className="logo-container">
                    <img src={Image} width="100px" height="100px" alt="logo"/>
                </div>
            </header>
        </div>
    )
}

export default Header
