"use client"
import Image from "next/image";
import Styles from './page.module.css'
import Button from "./components/button/Button";
export default function Home() {
  const handlebutton = () => {
    console.log("shop more")
  }
  return (
    <div className={Styles.maincontainer}>
      <div className={Styles.container}>
        <div className={Styles.col}>
          <h2 className={Styles.title}>Your one-stop e-commerce destination</h2>
          <p className={Styles.description}>welcome to our web page here youn can enjoy shopping and .....</p>
          {/* <button className={Styles.button}>More</button> */}
          <Button name={"more"} style={Styles.button} handlebutton={handlebutton} />
        </div>
        <div className={Styles.col}>
          <Image
            style={Styles.img}
            priority={true}
            src="/images/hero/hero1.svg"
            width={400}
            height={300}
            alt="hero image"
          />
        </div>

      </div>
    </div>

  );
}
