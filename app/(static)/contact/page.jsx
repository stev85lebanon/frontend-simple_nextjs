"use client"
import Button from '@/app/components/button/Button'

import styles from './page.module.css'
const Contact = () => {
  const handlebutton=()=>{
    console.log("hi contact")
  }
  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      {/* <button onClick={handlebutton} >send</button> */}
      <Button name="send" handlebutton={handlebutton} style={styles.button}/>
     
    </div>
  )
}

export default Contact
