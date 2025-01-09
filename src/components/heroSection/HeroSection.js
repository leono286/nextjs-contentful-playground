"use client"
import styles from "./heroSection.module.css"
import Image from "next/image"
import { useMenu } from "../../contexts/MenuContext"

export const HeroSection = ({items}) => { 

    const slogan = items[0].fields.slogan;
    const sloganDetail = items[1].fields.slogan;
    const img = items[2].fields.heroImg.fields.file;
    const imgMobile = items[4].fields.heroImg.fields.file;
    const link = items[3].fields;

    const text = link.text;
    const href = link.href;

    const {menuOpen, setMenuOpen} = useMenu(false)


  return (
    <div className={`${menuOpen ? styles.hideSection:styles.heroSection}`}>  

          <Image 
          src={"https:" + imgMobile.url}
          alt="Imagen adaptativa a movil"
          width={600}
          height ={584}
          className={styles.heroImgMobile}
          />
          <Image 
          src={"https:" + img.url}
          alt=""
          width={1500}
          height ={640}
          className={styles.heroImg}
          />
        <div className={styles.heroContent}>
          <p className={styles.slogan}>{slogan}</p>
          <p className={styles.sloganDetail}>{sloganDetail}</p>
          <a href={href}>
            {text}
            <img           
            src="\icons\arrow_diagonal.png" 
            alt="arrow_diagonal" 
            />
            </a> 
        </div>
    </div>
  )
}
