import locationIcon from '../assets/icon-location.svg'
import linkIcon from '../assets/icon-website.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import companyIcon from '../assets/icon-company.svg'

import styles from './ProfessionalInfo.module.css'

const ProfessionalInfo = props => {
  const { location, companyWhereWorks, twitterAccount, websiteUrl } = props.profileProfessionalInfo

  const renderWebsiteUrl = () => {
    if(websiteUrl) {
      return( 
        <a className={props.darkModeOn ? styles.link_dark: styles.link} href={websiteUrl}>
          {websiteUrl}
        </a>
      )
    } else {
      return <p> Not availabe</p>
    }
  }

  return(
    <div className={styles['professional-info']}>
      <div className={styles.wrapper}>
        <img src={locationIcon} alt="" className="icon"/>
        <p className="info">{ location ? location : 'Not available'}</p>
      </div>

      <div className={styles.wrapper}>
        <img src={linkIcon} alt="" className="icon"/>
        {renderWebsiteUrl()}
      </div>

      <div className={styles.wrapper}>
        <img src={twitterIcon} alt="" className="icon"/>
        <p className="info"> { twitterAccount ? twitterAccount : 'Not available'} </p>
      </div>

      <div className={styles.wrapper}>
        <img src={companyIcon} alt="" className="icon"/>
        <p className="info"> { companyWhereWorks ? companyWhereWorks : 'Not available'} </p>
      </div>
    </div>
  )
}

export default ProfessionalInfo
