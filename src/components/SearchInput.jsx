import {useState} from 'react'

import searchIcon from '../assets/icon-search.svg'

import styles from './SearchInput.module.css'

const SearchInput = props => {
  const [inputValue, setInputValue] = useState('')

  return(
    <label htmlFor="profile-search" className={
      `${styles['search-input']} ${props.darkModeOn ? styles.dark : ''}`
    }
    >
      <img src={searchIcon} alt="" />
      <input type="text" id="profile-search" placeholder="Search GitHub username"
        value={inputValue} onChange={event => {
          setInputValue(event.target.value)
          props.changeUsernameFunc(event.target.value)
        }}
      />
      <small className="warning"></small>
    </label>
  )
}

export default SearchInput
