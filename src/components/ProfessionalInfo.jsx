import locationIcon from '../assets/icon-location.svg'
import linkIcon from '../assets/icon-website.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import companyIcon from '../assets/icon-company.svg'

import styles from './ProfessionalInfo.module.css'

const ProfessionalInfo = props => {
  const { location, companyWhereWorks, twitterAccount, websiteUrl } = props.profileProfessionalInfo

  const renderWebsiteUrl = () => {
    if(websiteUrl && websiteUrl !== '') {
      return <a href={websiteUrl}>{websiteUrl}</a>
    } else {
      return <p> Not availabe</p>
    }
  }

  return(
    <div className={styles['professional-info']}>
      <div className={styles.wrapper}>
        <img src={locationIcon} alt="" className="icon"/>
        <p className="info">{ location }</p>
      </div>

      <div className={styles.wrapper}>
        <img src={linkIcon} alt="" className="icon"/>
        {renderWebsiteUrl()}
      </div>

      <div className={styles.wrapper}>
        <img src={twitterIcon} alt="" className="icon"/>
        <p className="info"> { twitterAccount } </p>
      </div>

      <div className={styles.wrapper}>
        <img src={companyIcon} alt="" className="icon"/>
        <p className="info"> { companyWhereWorks} </p>
      </div>
    </div>
  )
}

export default ProfessionalInfo
