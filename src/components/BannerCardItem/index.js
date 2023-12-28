// Write your code here.

import './index.css'

const BannerDetails = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={`card ${className}`}>
      <div className="container">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerDetails
