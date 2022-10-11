import SearchInput from './SearchInput'
import Button from './Button'

import styles from './SearchBar.module.css'

const SearchBar = props => {
  return(
    <div className={styles['search-bar']}>
      <SearchInput darkModeOn={props.darkModeOn}/>
      <Button text="Search" />
    </div>
  )
}

export default SearchBar
