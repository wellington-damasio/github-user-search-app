import styles from './Container.module.css'

const Container = props => { 
    let darkModeOn = props.hasBackgroundColor && props.darkModeOn

    const getClassNames = () => {
        let className = `${styles.container}`

        if(darkModeOn) className += ` ${styles['container--dark']}`
        if(props.hasBackgroundColor) className += ` ${styles['container--light']}`
        if(props.horizontalSpaceBetweenFlex) className += `${styles['horizontal-spaceBetween-flex']}`

        return className
    }

    return(
        <div className={getClassNames()}>
            {props.children}
        </div>
    )
}

export default Container
