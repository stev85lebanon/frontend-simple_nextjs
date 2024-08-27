"use client"
import styles from './Button.module.css'
const Button = ({ name }) => {
    return (
        <div >
            <button className={styles.button} onClick={() => { console.log("logout") }}>{name}</button>
        </div>
    )
}

export default Button
