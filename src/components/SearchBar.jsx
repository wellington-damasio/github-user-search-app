import SearchInput from './SearchInput'

import styles from './SearchBar.module.css'
import { useState } from 'react'

const SearchBar = props => {
  const [inputValue, setInputValue] = useState('')

    const handleSubmit = event => {
      event.preventDefault()
      props.changeStateFunc()
    }

    const handleInputChange = event => {
      props.changeUsernameFunc(event.target.value)
      setInputValue(event.target.value)
    }
    return(
      <form className={styles['search-bar']} onSubmit={handleSubmit}>
        <SearchInput 
          darkModeOn={props.darkModeOn} 
          changeUserNameFunc={props.changeUserNameFunc}
          inputChangeFunc={handleInputChange}
          inputValue={inputValue}
        />
        <button
          type='submit'
          className={styles.btn}
        >
          Search
        </button>
      </form>
    )
}

export default SearchBar
