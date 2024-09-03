"use client"
import Link from "next/link"
import { data } from "./data"
import styles from './Navbar.module.css'
import { Lobster } from "next/font/google";
import Button from "../button/Button";
import Toggle from "../toggle/Toggle";
const lobst = Lobster({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
    const handlebuttonlogin = () => {
        console.log("login")
    }
    const handlebuttonsignin = () => {
        console.log("sign in")
    }
    return (
        <div className={styles.maincontainer}>
            <nav className={styles.container}>
                <h1 className={lobst.className}>groWith</h1>
                <div className={styles.loopnavbar} >
                    <Toggle />
                    {data.map((pro) => <Link className={styles.link} key={pro.id} href={pro.url}>{pro.title}</Link>
                    )}
                    <Link href={"/login"}><Button name="Login" style={styles.button} handlebutton={handlebuttonlogin} /></Link>

                    <Link href={"/signin"}><Button name="Sign In" style={styles.button} handlebutton={handlebuttonsignin} /></Link>


                </div>
            </nav>
        </div>
    )
}

export default Navbar
