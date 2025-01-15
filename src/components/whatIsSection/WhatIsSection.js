"use client";

import { useState, useEffect } from "react";
import { useMenu } from "../../contexts/MenuContext";
import React from "react";
import styles from "./whatIsSection.module.css";
import Image from "next/image";

export const WhatIsSection = ({ items }) => {
  const { menuOpen } = useMenu(false);

  const img1 = items[0].fields.img[0].fields.file;
  const img2 = items[0].fields.img[1].fields.file;
  const img3 = items[0].fields.img[2].fields.file;
  const textLink = items[1].fields.name;
  const link = items[1].fields.href;
  const title = items[2].fields.text;
  const text1 = items[3].fields.text;
  const text2 = items[4].fields.text;

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { url: img1.url, alt: "Imagen 1 de carrusel" },
    { url: img2.url, alt: "Imagen 2 de carrusel" },
    { url: img3.url, alt: "Imagen 3 de carrusel" },
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  // Maneja el clic en una imagen
  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={`${menuOpen ? styles.hideSection : styles.whatIsSection}`}>
      <div className={styles.textContent}>
        <p className={styles.textContentTitle}>{title}</p>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <a href={link} className={styles.button}>
        {textLink}
        <img src="/icons/arrow_diagonal.png" alt="arrow_diagonal" />
      </a>

      <div className={styles.carousel}>
        {!isMobile && (
          <>
            <button className={styles.prevButton} onClick={prevSlide}>
              {"<"}
            </button>
            <button className={styles.nextButton} onClick={nextSlide}>
              {">"}
            </button>
          </>
        )}

        <div className={styles.carouselWrapper}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${
                index === currentIndex ? styles.active : styles.inactive
              }`}
              onClick={() => isMobile && selectImage(index)}
            >
              <Image
                src={`https:${image.url}`}
                alt={image.alt}
                width={290}
                height={337}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};






/*"use client"
import { useMenu } from '../../contexts/MenuContext'
import React from 'react'
import styles from './whatIsSection.module.css'
import Image from "next/image"

export const WhatIsSection = ({items}) => {
    const {menuOpen, setMenuOpen} = useMenu(false)

    const img1 = items[0].fields.img[0].fields.file
    const img2 = items[0].fields.img[1].fields.file
    const img3 = items[0].fields.img[2].fields.file
    const textLink = items[1].fields.name
    const link = items[1].fields.href
    const title = items[2].fields.text
    const text1 = items[3].fields.text
    const text2 = items[4].fields.text

    

  return (
    <div className={`${menuOpen ? styles.hideSection:styles.whatIsSection}`}>
        <div className={styles.textContent}>
            <p className={styles.textContentTitle}>{title}</p>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
        <a href={link} className={styles.button}>
            {textLink}
            <img           
            src="\icons\arrow_diagonal.png" 
            alt="arrow_diagonal" 
            />
        </a>
        <div className={styles.imgCarousel}>
        <Image 
            src={"https:" + img1.url}
            alt="imagen 1 de carrusel"
            width={600}
            height ={584}
            />
            <Image 
            src={"https:" + img2.url}
            alt="imagen 2 de carrusel"
            width={600}
            height ={584}
            />
            <Image 
            src={"https:" + img3.url}
            alt="imagen 3 de carrusel"
            width={600}
            height ={584}
            />
        </div>
    </div>
  )
}*/