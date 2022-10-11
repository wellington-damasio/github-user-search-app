import searchIcon from '../assets/icon-search.svg'

import styles from './SearchInput.module.css'

const SearchInput = props => {
  console.log(props.darkModeOn)
  return(
    <label htmlFor="profile-search" className={
      `${styles['search-input']} ${props.darkModeOn ? styles.dark : ''}`
    }
    >
      <img src={searchIcon} alt="" />
      <input type="text" id="profile-search" placeholder="Search GitHub username"/>
      <small className="warning"></small>
    </label>
  )
}

export default SearchInput
