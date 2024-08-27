import { social_media } from './dataFooter'
import styles from './Footer.module.css'
import Image from 'next/image'
const Footer = () => {
    const handlesocial = social_media.map(media =>
        <Image
            className={styles.image}
            key={media.id}
            src={`/images/icons/${media.name}.png`}
            width={20}
            height={20}
            alt={`growith ${media.name} link`}
        />
    )

    return (
        <div className={styles.container}>
            <h3>Mustafa 2024 All rights reserved</h3>

            <div className={styles.linksconatiner}>
                {handlesocial}
            </div>
        </div>
    )
}

export default Footer
