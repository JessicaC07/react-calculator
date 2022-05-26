import styles from '../styles/display.module.css';

function Display({number}) {

    return(
        // if number is no set, will display 0
        <div className={styles.display}>{number || '0'} </div>
    )
}

export default Display;