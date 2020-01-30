import React from 'react'
import { Route, Link } from 'react-router-dom'
import showCharacter from './showCharacter'
import Home from './Home'
import showOptions from './showOptions'
import Animation from './Animation'

const App = () => {
  return (
    <>
      <h1>React development has begun!</h1>
      <Route exact path="/" component={Home}></Route>
      <Route path="/showcharacter/:id" component={showCharacter}></Route>
      <Route path="/showOptions/:id" component={showOptions}></Route>
      <Route path="/animation/:id/:name" component={Animation}></Route>
    </>
  )
}

export default App
