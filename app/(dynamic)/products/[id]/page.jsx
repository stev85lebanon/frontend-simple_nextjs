
import Image from 'next/image'
import styles from './page.module.css'
const ProductDetails = async({params}) => {
  const prod=await fetch(`https://dummyjson.com/products/${params.id}`)
  const result=await prod.json()

  
  return (
    <div className={styles.mainContainerProduct}>
      <div className={styles.imageContainer}>
              <Image 
              className={styles.image}
              src={result.thumbnail} 
              width={400} height={400}
              // fill={true} 
              alt="image"
              />
            </div>
            <div className={styles.imagesContainer}>
              <div className={styles.gallery}>
              {result.images.map((img)=>
                    <Image 
                    key={result.id}
                    className={styles.image}
                    src={img} 
                    width={200} height={200}
                    // fill={true} 
                    alt="product image"
                    priority

                    />)}
              </div>
            </div>
            <div className={styles.content}>
            <h1 className={styles.title}>{result.title}</h1>
            <p className={styles.description}>{result.description}</p>
            <p className={styles.price}>{result.price}</p>
            <p className={styles.category}>{result.category}</p>

          </div>

    </div>
  )
}

export default ProductDetails
