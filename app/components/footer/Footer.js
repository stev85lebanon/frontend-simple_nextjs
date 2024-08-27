import { social_media } from './dataFooter'
import styles from './Footer.module.css'
import Image from 'next/image'
const Footer = () => {
    const handlesocial = social_media.map(med =>
        <Image
            key={med.id}
            src={`/images/icons/${med.media}.png`}
            width={20}
            height={20}
            alt={`growith ${med.media} link`}
        />
    )
    return (
        <div className={styles.container}>
            <h3>2024 All rights reserved</h3>

            <div className={styles.linksconatiner}>
                {social_media.map(media =>
                    <Image
                        className={styles.image}
                        key={media.id}
                        src={`/images/icons/${media.name}.png`}
                        width={20}
                        height={20}
                        alt={`growith ${media.name} link`}
                    />
                )}
            </div>
        </div>
    )
}

export default Footer
