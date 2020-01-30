import React from 'react'
import { Route, Link } from 'react-router-dom'

const showOptions = props => {
  const id = props.match.params.id
  return (
    <>
    <img src={`/${id}.png`} alt="Image of character"/>
      <ul>
        <h1>Click the link to animate the character</h1>
        <Link to={`/animation/${id}/flip`}>link to flip</Link><br></br>
        <Link to={`/animation/${id}/dance`}>link to dance</Link><br></br>
        <Link to={`/animation/${id}/rotate`}>link to rotate</Link><br></br>
      </ul>
      <Link to={`/showcharacter/${id}`}>GO BACK</Link><br></br>
      <Link to="/">HOME</Link>
    </>
  )
}

export default showOptions