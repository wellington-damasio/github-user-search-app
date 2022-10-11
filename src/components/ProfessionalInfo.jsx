import locationIcon from '../assets/icon-location.svg'
import linkIcon from '../assets/icon-website.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import companyIcon from '../assets/icon-company.svg'

import styles from './ProfessionalInfo.module.css'

const ProfessionalInfo = () => {
  return(
    <div className={styles['professional-info']}>
      <div className={styles.wrapper}>
        <img src={locationIcon} alt="" className="icon"/>
        <p className="info">San Francisco</p>
      </div>

      <div className={styles.wrapper}>
        <img src={linkIcon} alt="" className="icon"/>
        <p className="info">https://github.blog</p>
      </div>

      <div className={styles.wrapper}>
        <img src={twitterIcon} alt="" className="icon"/>
        <p className="info">Not Available</p>
      </div>

      <div className={styles.wrapper}>
        <img src={companyIcon} alt="" className="icon"/>
        <p className="info">@github</p>
      </div>
    </div>
  )
}

export default ProfessionalInfo
