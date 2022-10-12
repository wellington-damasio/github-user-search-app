import styles from './Button.module.css'

const Button = props => {
  return(
    <button className={styles.btn}  onClick={() => props.changeStateFunc()}>{props.text}</button>
  )
}

export default Button
