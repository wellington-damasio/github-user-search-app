import styles from './SocialInfo.module.css'

const SocialInfo = props => {
  const { repos, followers, following } = props.profileSocialInfo
  return(
    <div className={`${styles['social-info']} ${props.darkModeOn ? styles.dark : ''}`}>
      <div className="wrapper">
        <p className="label">Repos</p>
        <p className={styles.number}> { repos  }</p>
      </div>

      <div className="wrapper">
        <p className="label">Followers</p>
        <p className={styles.number}> { followers }</p>
      </div>

      <div className="wrapper">
        <p className="label">Following</p>
        <p className={styles.number}> { following }</p>
      </div>
    </div>
  )
}

export default SocialInfo
