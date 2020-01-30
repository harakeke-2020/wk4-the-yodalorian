import React from 'react'
import { Link } from 'react-router-dom'

const CharacterGrid = () => {
  return (
    <>
    <h1>SELECT YOUR CHARACTER</h1>
      <ul className="grid-container">
        <Link className="topleft" to="/showcharacter/yoda.png"><img className="home-char-img" src="/Images/yoda.png" alt="Image of Character"/></Link>
        <Link className="topmiddle" to="/showcharacter/jabba.png"><img className="home-char-img" src="/Images/jabba.png" alt="Image of Character"/></Link>
        <Link className="topright" to="/showcharacter/niennunb"><img className="home-char-img" src="/Images/niennunb.jpg" alt="Image of Character"/></Link>

        <Link className="centerleft" to="/showcharacter/jarjar.jpg"><img className="home-char-img" src="/Images/jarjar.jpg" alt="Image of Character"/></Link>
        <Link className="centermiddle" to="/showcharacter/maxribo.jpg"><img className="home-char-img" src="/Images/maxribo.jpg" alt="Image of Character"/></Link>
        <Link className="centerright" to="/showcharacter/ewok.jpg"><img className="home-char-img" src="/Images/ewok.jpg" alt="Image of Character"/></Link>

        <Link className="bottomleft" to="/showcharacter/bobafett.jpg"><img className="home-char-img" src="/Images/bobafett.jpg" alt="Image of Character"/></Link>
        <Link className="bottommiddle" to="/showcharacter/gremlin.jpeg"><img className="home-char-img" src="/Images/gremlin.jpeg" alt="Image of Character"/></Link>
        <Link className="bottomright" to="/showcharacter/EG-series_power_droid.png"><img className="home-char-img" src="/Images/EG-series_power_droid.png" alt="Image of Character"/></Link>
      </ul>
    </>
  )
}

export default CharacterGrid
