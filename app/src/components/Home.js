import React from 'react'
import Heroimg from '../img/hero.jpg'

export const Home = () => {
  return (
    <header id="header">
    <div id="header-text-box">
   <h1 id='header-title'>We design and build better chairs, for better life</h1>
   <p id="header-text">In a small shop in the heart of Lisbon, we spend our days relentlessly perfecting the chair. The result is a perfect blend of beauty and comfort, that will have a lasting impact on your health.</p>
   <a id="shop-chairs" href="#">Shop chairs</a>
  </div>
   <img id= "header-img" src={Heroimg} alt="chair"></img>
  </header>
  )
}