import styles from './PersonalInfo.module.css'

const PersonalInfo = props => {
  return(
    <div className={styles['personal-info']}>
      <div className="profile-pic__container">
        <img src="" alt="" className="profile-pic" />
      </div>
      <p className="profile-info__name">
        {props.name ? props.name : 'Octocat'}
      </p>
      <small className="profile-info__nickname">
        {props.nickname ? props.nickname : '@octocat'}
      </small>
      <p className="profle-info__bio">
        {props.profileBio ? props.profileBio : 'This profile has no bio'}
      </p>
      <p className="joined-info">
        {props.joinedIn ? props.joinedIn : 'Joined 25 Jan 2011'}
      </p>
    </div>
  )
}

export default PersonalInfo
