import React from 'react'
import { Route, Link } from 'react-router-dom'

const showOptions = props => {
  const id = props.match.params.id
  return (
    <>
    <Link to="/chargrid"><img className="bigtitle" src="/Images/title.png" /></Link>
    <div className="container">
      <img className="home-char-img" src={`/Images/${id}`} alt="Image of character"/>
      <div className="list">
      <h2>Choose an animation</h2>
        <ul>
          <Link to={`/animation/${id}/darkside`}><li>Convert to darkside</li></Link>
          <Link to={`/animation/${id}/dealWithIt`}><li>Deal with it</li></Link>
        </ul>
        <Link to="/chargrid">Or, choose another character</Link><br></br>
      </div>
    </div>
    </>
  )
}

export default showOptions
