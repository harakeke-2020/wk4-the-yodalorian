import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className="wtf">
      <Link to="/home"><button className="homebtn">Click me</button></Link>
    </div>
  )
}

export default Intro
