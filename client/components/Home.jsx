import React from 'react'
import { Link, Route } from 'react-router-dom'
import showCharacter from './showCharacter'

const Home = () => {
  return (
    <>
    <h1>Welcome</h1>
    
    <p>Stretch goal: show grid of characters would display here</p>
    <Link to="/showcharacter/yoda">Show Yoda</Link>
    </>
  )
}

export default Home
