"use client"
import { useContext } from 'react'
import styles from './Button.module.css'
import { ThemeContext } from '@/app/context/ThemeContext'
const Button = ({ name, style, handlebutton }) => {

    const { mode } = useContext(ThemeContext)
    return (
        <div >
            <button className={style} style={mode === "dark" ? { color: "white" } : { color: "black", background: "gray" }} onClick={() => { handlebutton() }}>{name}</button>
        </div>
    )
}

export default Button
