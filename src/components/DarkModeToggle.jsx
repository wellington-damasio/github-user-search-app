import sunIcon from '../assets/icon-sun.svg'
import moonIcon from '../assets/icon-moon.svg'

import styles from './DarkModeToggle.module.css'

const DarkModeToggle = props => {
  const renderButton = () => {
    if(props.darkModeOn) {
      return(
        <button className={`${styles['dark-mode-toggle']} ${styles.dark}`} 
          onClick={() => props.toggleDarkModeFunc()}
        >
          Light <img src={sunIcon} alt="Sun icon" aria-hidden="true"/>
        </button>
      )
    } else {
      return(
        <button className={styles['dark-mode-toggle']} onClick={() => props.toggleDarkModeFunc()}>
          Dark <img src={moonIcon} alt="" /> 
        </ button>
      )
    }
  }

  return renderButton()
}

export default DarkModeToggle
