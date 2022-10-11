import DarkModeToggle from './DarkModeToggle.jsx'

import styles from './UtilsBar.module.css'

const UtilsBar = props => {
  return(
    <div className={`${styles['utils-bar']} mb-2`}>
      <h1>devfinder</h1>
      <DarkModeToggle darkModeOn={props.darkModeOn} toggleDarkModeFunc={props.toggleDarkModeFunc}/>
    </div>
  )
}

export default UtilsBar
