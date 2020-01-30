import React from 'react'
import { Route, Link } from 'react-router-dom'
const Animation = props => {
  return (
    <>
<h1>Display {props.match.params.id}'s animation {props.match.params.name}</h1>
    </>
  )
}

export default Animation