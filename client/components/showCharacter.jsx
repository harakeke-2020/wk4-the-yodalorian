import React from 'react'
import { Link, Route } from 'react-router-dom'
import showOptions from './showOptions'


const showCharacter = props => {
  const id = props.match.params.id
  return (
    <>
      <span>image of {id} displays here</span>

      <Link to={`/showOptions/${id}`}>Link to show options</Link>
    </>
  )
}

export default showCharacter