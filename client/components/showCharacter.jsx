import React from 'react'
import { Link, Route } from 'react-router-dom'
import showOptions from './showOptions'


const showCharacter = props => {
  const id = props.match.params.id
  return (
    <>
      <span>Click the image to see animation options</span>
      <Link to={`/showOptions/${id}`}><img src={`/${id}.png`} alt="Image of Yoda"/>Show</Link><br></br>
      <Link to="/">HOME</Link>
    </>
  )
}

export default showCharacter