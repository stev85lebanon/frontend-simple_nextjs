"use client"
import Image from "next/image"
import Link from "next/link"
import styles from './Products.module.css'
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "@/app/context/ThemeContext"


// const getData=async()=>{
//   const res=await fetch("https://dummyjson.com/products")
// if(!res.ok){
//   throw new Error("failed to fetch data")
// }
// return res.json
// }

const Products = () => {
const [datas,setDatas]=useState()

useEffect(()=>{
fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(resul=>setDatas(resul.products));
},[])
// const prod=await fetch("https://dummyjson.com/products")
// const result = await prod.json()
// const data=result.products



const {mode}=useContext(ThemeContext)

  return (

    <div className={styles.maincontainer}>
      
      {datas&&datas.map((prod)=>{
        return (
          <Link style={mode==="dark" ?{borderColor:"white"}:{borderColor:"black"}}  className={styles.linkcard}  href={`products/${prod.id}`} key={prod.id} >
            <div className={styles.imageContainer}>
              <Image 
              className={styles.image}
              src={prod.thumbnail} 
              // src="/images/icons/facebook.png" 
              width={200} height={200}
              // fill={true} 
              alt="products images"
              priority

              />
            </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{prod.title}</h1>
            <p className={styles.description}>{prod.description}</p>
          </div></Link>
        )
      })}
    </div>
  )
}

export default Products
