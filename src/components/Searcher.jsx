import {useState} from 'react'

import Container from './Container'
import SearchBar from './SearchBar'
import PersonalInfo from './PersonalInfo'
import SocialInfo from './SocialInfo'
import ProfessionalInfo from './ProfessionalInfo'
import ProfileInfoContainer from './ProfileInfoContainer'

import styles from './Searcher.module.css'

const Searcher = props => {
  const [state, setState] = useState({
    profileInfo: {
      personalInfo: {
        name: 'Not availabe',
        username: 'Not available',
        joinedDate: 'Not available',
        profilePicUrl: '',
      },

      professionalInfo: {
        repos: 0,
        followers: 0,
        following: 0
      },

      socialInfo: {
        location: 'Not available',
        websiteUrl: 'Not available',
        twitterAccount: 'Not available',
        companyWhereWorks: 'Not available'
      },
    },
  })

  return(
    <div className={styles.searcher}>
      <Container hasBackgroundColor={true} darkModeOn={props.darkModeOn}>
        <SearchBar darkModeOn={props.darkModeOn}/>
      </Container>

      <Container hasBackgroundColor={true} darkModeOn={props.darkModeOn}>
        <ProfileInfoContainer>
            <PersonalInfo darkModeOn={props.darkModeOn}/>
            <SocialInfo darkModeOn={props.darkModeOn}/>
            <ProfessionalInfo />

        </ProfileInfoContainer>
       </Container>
    </div>
  )
}

export default Searcher
