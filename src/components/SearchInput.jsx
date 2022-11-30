import searchIcon from '../assets/icon-search.svg'

import styles from './SearchInput.module.css'

const SearchInput = props => {
  return(
    <label htmlFor="profile-search" className={
      `${styles['search-input']} ${props.darkModeOn ? styles.dark : ''}`
    }
    >
      <img src={searchIcon} alt="" />
      <input type="text" id="profile-search" placeholder="Search GitHub username"
        value={props.inputValue} onChange={(event) => props.inputChangeFunc(event)}
      />
      <small className="warning"></small>
    </label>
  )
}

export default SearchInput
