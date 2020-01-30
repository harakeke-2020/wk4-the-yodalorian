import React from 'react'
import { Route, Link } from 'react-router-dom'

const Animation = props => {
  const id = props.match.params.id
  const name = props.match.params.name
  return (
    <>
    <h2>Display ({id}'s) animation ({name})</h2>
    <img className="dealWithIt" className="character" src="yoda.png" />
    {<img className="glasses" src="glasses.png"/>}
    </>
  )
}

export default Animation
