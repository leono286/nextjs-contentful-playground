"use client"
import styles from "./heroSection.module.css"
import Image from "next/image"
import { useMenu } from "../../contexts/MenuContext"
import { useState } from "react"

export const HeroSection = ({items}) => { 
    //estado del menú desplegabe
    const {menuOpen, setMenuOpen} = useMenu(false)

    // variables desde contentful
    const slogan = items[0].fields.slogan;
    const sloganDetail = items[1].fields.slogan;
    const img = items[2].fields.heroImg.fields.file;
    const imgMobile = items[4].fields.heroImg.fields.file;
    const link = items[3].fields;
    const text = link.text;
    const href = link.href;

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

    // Estado de carrusel
    /*const [currentItem, setCurrentItem] = useState(0);

    //Array quemado para la construcción del carrusel
    const arrayHeroItems = [
      {slogan, sloganDetail,img,imgMobile,link,text,href},
      {slogan, sloganDetail,img,imgMobile,link,text,href},
      {slogan, sloganDetail,img,imgMobile,link,text,href}
      ]

    //Funciones para navegar en carrusel
    const nextSlide = () => {
      setCurrentItem((prev) => (prev + 1) % arrayHeroItems.length);
    };
  
    const prevSlide = () => {
      setCurrentItem((prev) => (prev - 1 + arrayHeroItems.length) % arrayHeroItems.length);
    };*/

    /*return (
      <div className={`${menuOpen ? styles.hideSection:styles.heroSection}`}>  
        <div className={styles.carousel}>
            {arrayHeroItems.map((item, index) => (
              <div key={index}
              className={`${styles.item} ${index === currentItem ? styles.active : ""}`}>
                  <Image 
                  src={"https:" + item.imgMobile.url}
                  alt="Imagen adaptativa a movil"
                  width={600}
                  height ={584}
                  className={styles.heroImgMobile}
                  />
                  <Image 
                  src={"https:" + item.img.url}
                  alt=""
                  width={1500}
                  height ={640}
                  className={styles.heroImg}
                  />
                  <div className={styles.heroContent}>
                    <p className={styles.slogan}>{item.slogan}</p>
                    <p className={styles.sloganDetail}>{item.sloganDetail}</p>
                    <a href={item.href}>
                      {item.text}
                      <img           
                      src="\icons\arrow_diagonal.png" 
                      alt="arrow_diagonal" 
                      />
                      </a> 
                  </div>
              </div>
            ))}        
        <button className={styles.prevButton} onClick={prevSlide}>
        {"<"}
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          {">"}
        </button> 
        </div >

      </div>
    )*/