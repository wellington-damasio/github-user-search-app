import styles from './Button.module.css'

const Button = props => {
  return(
    <button className={styles.btn}>{props.text}</button>
  )
}

export default Button
