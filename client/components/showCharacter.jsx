import React from 'react'
import { Link, Route } from 'react-router-dom'
import showOptions from './showOptions'


const showCharacter = props => {
  const id = props.match.params.id
  console.log(id)
  return (
    <>
      <span>Click the image to see animation options</span><br></br>
      <Link to={`/showOptions/${id}`}><img className="home-char-img" src={`/Images/${id}`} alt={`Image of ${id}`}/></Link><br></br>
      <Link to="/chargrid">HOME</Link>
    </>
  )
}

export default showCharacter