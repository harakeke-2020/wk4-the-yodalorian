import React from 'react'
import { Route, Link } from 'react-router-dom'

const showOptions = props => {
  const id = props.match.params.id
  return (
    <>
      <img src="req.params.id"></img>
      <ul>
        
        <Link to={`/animation/${id}/flip`}>link to flip</Link>
        <Link to={`/animation/${id}/dance`}>link to dance</Link>
        <Link to={`/animation/${id}/rotate`}>link to rotate</Link>
      </ul>
    </>
  )
}

export default showOptions