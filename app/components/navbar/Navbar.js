import Link from "next/link"
import { data } from "./data"
import styles from './Navbar.module.css'
import { Lobster } from "next/font/google";
const lobst = Lobster({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
    return (
        <div className={styles.maincontainer}>
            <nav className={styles.container}>
                <h1 className={lobst.className}>groWith</h1>
                <div >{data.map((pro) => <Link className={styles.link} key={pro.id} href={pro.url}>{pro.title}</Link>
                )}</div>

            </nav>
        </div>
    )
}

export default Navbar
