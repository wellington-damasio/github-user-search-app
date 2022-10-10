import sunIcon from '../assets/icon-sun.svg'
import moonIcon from '../assets/icon-moon.svg'

import styles from './DarkModeToggle.module.css'

const DarkModeToggle = props => {
  const renderButton = () => {
    if(props.darkModeOn) {
      return(
        <>
          Light <img src={sunIcon} alt="Sun icon" aria-hidden="true"/>
        </>
      )
    } else {
      return(
        <>
          Dark <img src={moonIcon} alt="" /> 
        </>
      )
    }
  }

  return(
    <div className={styles['dark-mode-toggle']}>
      {renderButton()}
    </div>
  )
}

export default DarkModeToggle
