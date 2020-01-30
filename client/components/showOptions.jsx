import React from 'react'
import { Route, Link } from 'react-router-dom'

const showOptions = props => {
  const id = props.match.params.id
  return (
    <>
    <img className="home-char-img" src={`/Images/${id}`} alt="Image of character"/>
      <ul>
        <h1>Click the link to animate the character</h1>
        <Link to={`/animation/${id}/darkside`}>Convert to darkside</Link><br></br>
        <Link to={`/animation/${id}/dealWithIt`}>Deal with it</Link><br></br>
      </ul>
      <Link to={`/showcharacter/${id}`}>GO BACK</Link><br></br>
      <Link to="/">HOME</Link>
    </>
  )
}

export default showOptions