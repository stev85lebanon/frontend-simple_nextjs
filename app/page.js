import Image from "next/image";
import Styles from './page.module.css'
export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.sidecontainer}>
        <h2>title</h2>
        <p>welcome to our web page</p>
        <button>More</button>
      </div>
      <div className={Styles.imagecontainer}>
        <Image
          priority={true}
          src="/images/hero/hero1.svg"
          width={200}
          height={200}
          alt="hero image"
        />
      </div>

    </div>
  );
}
