import styles from './SocialInfo.module.css'

const SocialInfo = props => {
  return(
    <div className={`${styles['social-info']} ${props.darkModeOn ? styles.dark : ''}`}>
      <div className="wrapper">
        <p className="label">Repos</p>
        <p className={styles.number}>8</p>
      </div>

      <div className="wrapper">
        <p className="label">Followers</p>
        <p className={styles.number}>3938</p>
      </div>

      <div className="wrapper">
        <p className="label">Following</p>
        <p className={styles.number}>9</p>
      </div>
    </div>
  )
}

export default SocialInfo
