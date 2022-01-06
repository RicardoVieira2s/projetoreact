import React from 'react'
import './floatingBar.css'
import MenuBar from './menubar'

export default function floatingBar() {

    return (
        <div class="container-image">
            <div class="hero-image" />
            <div class="floating-bar">
                <MenuBar />
            </div>
        </div>
    )
}