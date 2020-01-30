import React from 'react'
import { Link, Route } from 'react-router-dom'
import showCharacter from './showCharacter'

const Home = () => {
  return (
    <>
    <h1>Welcome</h1>

    
    <Link to="/showcharacter/yoda">Show character</Link>
    </>
  )
}

export default Home
