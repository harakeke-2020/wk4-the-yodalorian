import React from 'react'
import { Route, Link } from 'react-router-dom'
const Animation = props => {
  const id = props.match.params.id
  const name = props.match.params.name
  return (
    <>
    <h1>Animation displays here in this route. </h1>
    <img src={`/${id}.png`} alt="Image of character"/>
    <h1>Display ({id}'s) animation ({name})</h1>
    <Link to={`/showOptions/${id}`}>GO BACK</Link><br></br>
    <Link to="/">HOME</Link>
    </>
  )
}

export default Animation