import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className="container">
        <div className="child">
            <h2>More than just a shorter name.</h2>
            <p>Build your brand's recognition and get detailed analytics on how your links are performing.</p>
            <a href="#cta">Get Started</a>
        </div>
        <img src="./img/undraw_data_trends_re_2cdy.svg" alt="" className="child"/>
    </div>
  )
}

export default Hero