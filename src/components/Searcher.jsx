import Container from './Container.jsx'
import SearchBar from './SearchBar.jsx'
import PersonalInfo from './PersonalInfo.jsx'
import SocialInfo from './SocialInfo.jsx'
import ProfessionalInfo from './ProfessionalInfo.jsx'

import styles from './Searcher.module.css'

const Searcher = () => {
  return(
    <div className={styles.searcher}>
      <Container hasBackgroundColor={true} >
        <SearchBar />
      </Container>

      <Container hasBackgroundColor={true}>
        <PersonalInfo />
        <SocialInfo />
        <ProfessionalInfo />
      </Container>
    </div>
  )
}

export default Searcher
