import styles from './PersonalInfo.module.css'

const PersonalInfo = props => {

  const renderProfilePicture = () => {
    if(props.imgUrl && props.imgUrl !== '') {
      return(
        <img src="" className={styles['profile-pic']} alt="" />
      )
    } else {
      return(
        <div className={styles.placeholder}></div>
      )
    }
  }

  return(
    <div className={`${styles['personal-info']} ${props.darkModeOn ? styles.dark : ''}`}>
      {renderProfilePicture()}
      <p className={`${styles.name} heading-2`}>
        {props.name ? props.name : 'Octocat'}
      </p>
      <small className={`${styles.username} heading-4` }>
        {props.nickname ? props.nickname : '@octocat'}
      </small>
      <p className={styles['joined-date']}>
        {props.joinedIn ? props.joinedIn : 'Joined 25 Jan 2011'}
      </p>
      <p className={styles.bio}>
        {props.profileBio ? props.profileBio : 'This profile has no bio'}


      </p>

    </div>
  )
}

export default PersonalInfo
