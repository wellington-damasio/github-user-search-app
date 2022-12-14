import {Octokit} from 'octokit'

import {useState} from 'react'

import Container from './Container'
import SearchBar from './SearchBar'
import PersonalInfo from './PersonalInfo'
import SocialInfo from './SocialInfo'
import ProfessionalInfo from './ProfessionalInfo'
import ProfileInfoContainer from './ProfileInfoContainer'

import styles from './Searcher.module.css'

const octokit = new Octokit ({
  auth: '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'
})



const Searcher = props => {
  const [state, setState] = useState({
    personalInfo: {
      name: '',
      username: '',
      joinedDate: '',
      profilePicUrl: '',
      bio: ''
    },

    socialInfo: {
      repos: 0,
      followers: 0,
      following: 0
    },

    professionalInfo: {
      location: '',
      websiteUrl: '',
      twitterAccount: '',
      companyWhereWorks: ''
    },

    username: 'octocat'
  })

  const handleChangeState = async () => {
    let userData
    try {
      userData = await octokit.request(`GET /users/{username}`, {
        username: state.username
      })
    } catch(e) {
      userData = {
        personalInfo: {
          name: '',
          username: '',
          joinedDate: '',
          profilePicUrl: '',
          bio: ''
        },

        socialInfo: {
          repos: 0,
          followers: 0,
          following: 0
        },

        professionalInfo: {
          location: '',
          websiteUrl: '',
          twitterAccount: '',
          companyWhereWorks: ''
        },

        username: 'octocat'
      }
    }

    const data = userData.data

    const transformedDate = () => {
      let result = data.created_at.slice(0, 4)
      let month =  data.created_at.slice(5, 7)

      switch(month) {
        case '01':
          result += ' January'
          break
        case '02':
          result += ' February'
          break
        case '03':
          result += ' March'
          break
        case '04':
          result += ' April'
          break
        case '05':
          result += ' May'
          break
        case '06':
          result += ' June'
          break
        case '07':
          result += ' July'
          break
        case '08':
          result += ' August'
          break
        case '09':
          result += ' September'
          break
        case '10':
          result += ' October'
          break
        case '11':
          result += ' November'
          break
        case '12':
          result += ' December'
          break
        default:
          break
      }

      let day = data.created_at.slice(8, 10)
      result += ` ${day}`

      return result
    }

    setState({
      personalInfo: {
        name: data.name,
        username: data.login,
        joinedDate: transformedDate(),
        profilePicUrl: data.avatar_url,
        bio: data.bio
      },

      socialInfo: {
        repos: data.public_repos,
        followers: data.followers,
        following: data.following
      },

      professionalInfo: {
        location: data.location,
        websiteUrl: data.blog,
        twitterAccount: data.twitter_username,
        companyWhereWorks: data.company
      }
    })
  }

  const changeCurrentUsername = newUserName => {
    setState({...state, username: newUserName})
  }

  return(
    <div className={styles.searcher}>
      <Container hasBackgroundColor={true} darkModeOn={props.darkModeOn}>
        <SearchBar darkModeOn={props.darkModeOn} changeStateFunc={handleChangeState} 
          changeUsernameFunc={changeCurrentUsername}/>
      </Container>

      <Container hasBackgroundColor={true} darkModeOn={props.darkModeOn}>
        <ProfileInfoContainer>
            <PersonalInfo darkModeOn={props.darkModeOn} profilePersonalInfo={state.personalInfo}/>
            <SocialInfo darkModeOn={props.darkModeOn} profileSocialInfo={state.socialInfo}/>
            <ProfessionalInfo profileProfessionalInfo={state.professionalInfo} darkModeOn={props.darkModeOn}/>

        </ProfileInfoContainer>
       </Container>
    </div>
  )
}

export default Searcher
