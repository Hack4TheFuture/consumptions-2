import React from 'react'
import './About.css'
import support from '../../assets/support.png'

function About() {
  return (
    <div className='about'>
      <div className='title'>About us</div>
      <div className='aboutSection'>
        <div className="part1">
          <h3>Hoody </h3><p>Small organization interested in charity especially toward the needy person in the region.
            Provide for you can donation with high security level </p>
            <p>Showing kindness and helping may reduce poverty. A small help make difference for whom suffering for a long time</p>
            <p>It's time to build a humanitarian community when you can create a smile for millions of people</p>
        </div>
        <div className="part2">
          <img src={support} alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default About