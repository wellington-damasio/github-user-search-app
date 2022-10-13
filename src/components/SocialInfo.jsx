import styles from './SocialInfo.module.css'

const SocialInfo = props => {
  const { repos, followers, following } = props.profileSocialInfo
  return(
    <div className={`${styles['social-info']} ${props.darkModeOn ? styles.dark : ''}`}>
      <div className="wrapper">
        <p className="label">Repos</p>
        <p className={styles.number}> { repos ? repos : 0 }</p>
      </div>

      <div className="wrapper">
        <p className="label">Followers</p>
        <p className={styles.number}> { followers ? followers : 0}</p>
      </div>

      <div className="wrapper">
        <p className="label">Following</p>
        <p className={styles.number}> { following ? following : 0}</p>
      </div>
    </div>
  )
}

export default SocialInfo
