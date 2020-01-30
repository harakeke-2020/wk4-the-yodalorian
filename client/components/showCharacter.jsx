import React from 'react'
import { Link, Route } from 'react-router-dom'
import showOptions from './showOptions'


const showCharacter = props => {
  const id = props.match.params.id
  return (
    <>
      <span>Click me</span>

      <Link to={`/showOptions/${id}`}>Link to showoptions</Link>
    </>
  )
}

export default showCharacter