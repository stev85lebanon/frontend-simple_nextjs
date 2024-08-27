import Image from "next/image"
import Link from "next/link"
import styles from './Products.module.css'
const Products = async() => {
const prod=await fetch("https://dummyjson.com/products")
const result = await prod.json()
const data=result.products
  return (
    <div className={styles.maincontainer}>
      
      {data.map((prod)=>{
        return (
          <Link  className={styles.linkcard}  href={`products/${prod.id}`} key={prod.id} >
            <div className={styles.imageContainer}>
              <Image 
              className={styles.image}
              src={prod.thumbnail} 
              // src="/images/icons/facebook.png" 
              width={200} height={200}
              // fill={true} 
              alt="image"
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
