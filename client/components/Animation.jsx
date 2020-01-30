import React from 'react'
import { Route, Link } from 'react-router-dom'

const Animation = props => {
  const id = props.match.params.id
  const name = props.match.params.name
  return (
    <>
    <h1>Animation displays here in this route. </h1>
    <h1>Display ({id}'s) animation ({name})</h1>
    </>
  )
}

export default Animation