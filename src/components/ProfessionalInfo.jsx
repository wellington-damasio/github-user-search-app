import locationIcon from '../assets/icon-location.svg'
import linkIcon from '../assets/icon-website.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import companyIcon from '../assets/icon-company.svg'

const ProfessionalInfo = () => {
  return(
    <div>
      <div className="wrapper">
        <img src={locationIcon} alt="" className="icon"/>
        <p className="info">San Francisco</p>
      </div>

      <div className="wrapper">
        <img src={linkIcon} alt="" className="icon"/>
        <p className="info">https://github.blog</p>
      </div>

      <div className="wrapper">
        <img src={twitterIcon} alt="" className="icon"/>
        <p className="info">Not Available</p>
      </div>

      <div className="wrapper">
        <img src={companyIcon} alt="" className="icon"/>
        <p className="info">@github</p>
      </div>
    </div>
  )
}

export default ProfessionalInfo
