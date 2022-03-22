import React from 'react'
import './ThreeCard.css'
const ThreeCard = () => {
  return (
    <section className="container" id="proof">
        <div className="parent ">
            <div className="box">
                <i className="fa-solid fa-chart-column"></i>
                <h3>Detailed Records</h3>
                <p>Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions and outreach.</p>
            </div>
            <div className="box">
            <i className="fa-solid fa-palette"></i>
                <h3>Fully Customizable</h3>
                <p>Improve brand awareness and content discoverablity through customizable links, super-charging audience engagement and insights.</p>
            </div>
            <div className="box">
            <i className="fa-solid fa-user-tie"></i>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your brand and content.</p>
            </div>
          </div>
    </section>
  )
}

export default ThreeCard