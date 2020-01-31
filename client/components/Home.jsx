import React from 'react'
import { Link, Route } from 'react-router-dom'
import ReactSound from 'react-sound'

class Home extends React.Component {
  render () {
    return (
    <>
    <ReactSound
      url="/audio/maintheme.mp3"
      playStatus={(ReactSound.status.PLAYING)}
      onLoading={this.handleSongLoading}
    />
    <Link className="gridlink" to="/chargrid">
      <div className="home-body">
        <div className="fade"></div>

        <section className="star-wars">

          <div className="crawl">

            <div className="title">
              <p>Episode X</p>
              <h1>The Yodalorian</h1>
            </div>
            <p>It is a period of SQL war. Rebel coders, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>
            <p>Rebel coders have managed to harness the force to transform the franchises most beloved characters.</p>
            <p>Defeat the Empire’s sinister agents by selecting your favorite character and applying a range of powerful transformations.</p>
            <p>Click to Begin.</p>
          </div>
        </section>
      </div>
    </Link>
    </>
    )
  }
}

export default Home
