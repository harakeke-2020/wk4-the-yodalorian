import React from 'react'
import { Route, Link } from 'react-router-dom'

const Animation = props => {
  const id = props.match.params.id
  let name = props.match.url
  const index = (name.lastIndexOf('/') + 1)
  name = name.slice(index)
  let classes = name + ' character'
  console.log(id)

  return (
    <div className="container">
      <img src={`/Images/${id}`} alt="Image of character" className={classes}/>
      {name === 'dealWithIt' && <img className="glasses" src="glasses.png"/>}
      <Link to={`/showOptions/${id}`}><h3 className="hate">Choose another animation</h3></Link><br></br>
    </div>
  )
}

export default Animation
