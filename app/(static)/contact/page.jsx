"use client"
import Button from '@/app/components/button/Button'

import styles from './page.module.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'
const Contact = () => {
  const [cookies,setCookies]=useCookies("access_token")
  const handlebutton=async()=>{
    // const response = await axios.post("http://localhost:3000/auth/logout")
    setCookies("access_token","")
     window.localStorage.removeItem("userID")
     window.location.reload(false)

  }
  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      {/* <button onClick={handlebutton} >send</button> */}
      <Button name="Logout" handlebutton={handlebutton} style={styles.button}/>
     
    </div>
  )
}

export default Contact
