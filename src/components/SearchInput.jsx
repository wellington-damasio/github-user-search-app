import searchIcon from '../assets/icon-search.svg'

import styles from './SearchInput.module.css'

const SearchInput = () => {
  return(
    <label htmlFor="profile-search" className={styles['search-input']}>
      <img src={searchIcon} alt="" />
      <input type="text" id="profile-search" placeholder="Search a GitHub username"/>
      <small className="warning"></small>
    </label>
  )
}

export default SearchInput
