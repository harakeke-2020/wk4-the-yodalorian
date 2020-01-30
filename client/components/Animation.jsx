import React from 'react'
import { Route, Link } from 'react-router-dom'

const Animation = props => {
  const id = props.match.params.id
  const name = props.match.params.name
  return (
    <>

    <h2>Display ({id}'s) animation ({name})</h2>
    <img src={`/${id}.png`} alt="Image of character"/>
    {<img className="glasses" src="glasses.png"/>}
    <Link to={`/showOptions/${id}`}>GO BACK</Link><br></br>
    <Link to="/">HOME</Link>
    </>
  )
}

export default Animation
