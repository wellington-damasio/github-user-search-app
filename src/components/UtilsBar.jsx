import DarkModeToggle from './DarkModeToggle.jsx'

import styles from './UtilsBar.module.css'

const UtilsBar = () => {
  return(
    <div className={`${styles['utils-bar']} mb-2`}>
      <h1>devfinder</h1>
      <DarkModeToggle darkModeOn={false}/>
    </div>
  )
}

export default UtilsBar
