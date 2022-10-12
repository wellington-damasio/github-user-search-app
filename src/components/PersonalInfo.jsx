import styles from './PersonalInfo.module.css'

const PersonalInfo = props => {

  const {name, username, profilePicUrl, joinedDate, bio} = props.profilePersonalInfo

  const renderProfilePicture = () => {
    if(profilePicUrl && profilePicUrl !== '') {
      return(
        <img src={profilePicUrl} className={styles['profile-pic']} alt="" />
      )
    } else {
      return(
        <div className={styles.placeholder}></div>
      )
    }
  }

  const renderUserData = (data, prefix) => {
    if(data && data !== '') {
      return prefix ? `${prefix}${data}` : data
    } else {
      return 'Not available'
    }
  }

  return(
    <div className={`${styles['personal-info']} ${props.darkModeOn ? styles.dark : ''}`}>
      {renderProfilePicture()}
      <p className={`${styles.name} heading-2`}>{ renderUserData(name) }</p>
      <small className={`${styles.username} heading-4` }>{ renderUserData(username, '@') }</small>
      <p className={styles['joined-date']}>{ renderUserData(joinedDate) }</p>
      <p className={styles.bio}>{ bio && bio !== '' ? bio : 'This profile has no bio' }</p>

    </div>
  )
}

export default PersonalInfo
