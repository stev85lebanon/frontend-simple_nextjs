"use client"
import { useContext } from 'react'
import styles from './Toggle.module.css'
import { ThemeContext } from '@/app/context/ThemeContext'
const Toggle = () => {
    const { mode, toggle } = useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.darkmode}>🌙</div>
            <div className={styles.lightmode}>☀️</div>
            <div
                className={styles.switcher}
                style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
            />
        </div>
    )
}

export default Toggle
