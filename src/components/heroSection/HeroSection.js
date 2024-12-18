import styles from "./heroSection.module.css"
import Image from "next/image"

export const HeroSection = (props) => { 
    const {img, slogan, sloganDetail, link} = props
    const text = link.text;
    const href = link.href;
    const isCta = link.isCta;

    console.log(link)

  return (
    <div className={styles.heroSection}>      
        <Image className={styles.heroImg}
        src={"https:" + img.url}
        alt="Hero Section"
        width={1439}
        height ={570}
        />
        <h1 className={styles.slogan}>{slogan}</h1>
        <h5 className={styles.sloganDetail}>{sloganDetail}</h5>
        <a href={href}>{text}</a>
    </div>
  )
}
