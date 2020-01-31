import React from 'react'
import { Link, Route } from 'react-router-dom'
import showOptions from './showOptions'


const showCharacter = props => {
  const id = props.match.params.id
  console.log(id)
  return (
    <div className="container">
      <Link to={`/showOptions/${id}`}><img className="nav-char" src={`/Images/${id}`} alt={`Image of ${id}`}/></Link>
      <h2>Click the image to see animation options</h2>
    </div>
  )
}

export default showCharacter