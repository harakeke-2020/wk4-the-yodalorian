import React from 'react'
import { Link, Route } from 'react-router-dom'
import yoda from '../../server/public/Images/yoda.png' // with import

console.log(yoda)

const Home = () => {
  return (
    <>
    <h1>Welcome</h1>

    <p>Stretch goal: grid of characters would display here</p>
    <ul>
      <Link to="/showcharacter/yoda"><img src={yoda} alt="Image of Yoda"/></Link>
    </ul>
    </>
  )
}

export default Home
