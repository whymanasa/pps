import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../assets/pps_background.png';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="headerContainer" style={{background:`url(${BackgroundImage})`}}>
        <h1>Crooked but with Care</h1>
        <p>Let's Hear 'Em - Your Wish</p>
        <Link to="/menu">
          <button>To the salon</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
