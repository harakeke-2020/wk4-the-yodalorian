import React from 'react'
import { Link, Route } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Welcome</h1>

    <p>Stretch goal: grid of characters would display here</p>
    <ul>
      <Link to="/showcharacter/yoda"><img src="/yoda.png" alt="Image of Yoda"/>Show</Link>
      
    </ul>
    </>
  )
}

export default Home
