import styles from './ProfileInfoContainer.module.css'

const ProfileInfoContainer = props => {
  return(
    <div className={styles['profile-info__container']}>
      {props.children}
    </div>
  )
}

export default ProfileInfoContainer 
