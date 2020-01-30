import React from 'react'
import { Route, Link } from 'react-router-dom'

const showOptions = props => {
  const id = props.match.params.id
  return (
    <>
    <span>Image of {id} displays here</span>
      <img src="req.params.id"></img>
      <ul>
        
        <Link to={`/animation/${id}/flip`}>link to flip</Link><br></br>
        <Link to={`/animation/${id}/dance`}>link to dance</Link><br></br>
        <Link to={`/animation/${id}/rotate`}>link to rotate</Link><br></br>
      </ul>
    </>
  )
}

export default showOptions