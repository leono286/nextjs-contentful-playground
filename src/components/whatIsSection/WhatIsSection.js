// Importación de librerías
'use client';
import React, { useState, useRef } from 'react';
import { useMenu } from '../../contexts/MenuContext';
import styles from './whatIsSection.module.css';
import Image from 'next/image';

export const WhatIsSection = ({ items }) => {
  const { menuOpen } = useMenu(false);

  // Datos extraídos de props
  const img1 = items[0].fields.img[0].fields.file;
  const img2 = items[0].fields.img[1].fields.file;
  const img3 = items[0].fields.img[2].fields.file;
  const textLink = items[1].fields.name;
  const link = items[1].fields.href;
  const title = items[2].fields.text;
  const text1 = items[3].fields.text;
  const text2 = items[4].fields.text;

  // Estado para manejar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Imágenes del carrusel
  const images = [
    { url: img1.url, alt: 'Imagen 1 de carrusel' },
    { url: img2.url, alt: 'Imagen 2 de carrusel' },
    { url: img3.url, alt: 'Imagen 3 de carrusel' },
  ];

  // Función para manejar el clic en los botones de navegación
  const handleSlide = (direction) => {
    let newIndex = currentIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;//loop del carrusel con %
    } else if (direction === 'prev') {
      newIndex = (currentIndex - 1 + images.length) % images.length;// no se desborda con + images.length
    }

    setCurrentIndex(newIndex);
    const scrollAmount = newIndex * carouselRef.current.offsetWidth;// usa la ref y entra al nodo del DOM para acceder a propiedades offsetWidth 
    carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };

  // Función para manejar la selección de imagen
  const handleSelectImage = (index) => {
    setCurrentIndex(index);
  };

  // Renderizado del componente
  return (
    <div className={`${menuOpen ? styles.hideSection : styles.whatIsSection}`}>
      <div className={styles.whatIsContent}>
        <div className={styles.textContent}>
          <p className={styles.textContentTitle}>{title}</p>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
        <a href={link} className={styles.button}>
          {textLink}
          <img src="/icons/arrow_diagonal.png" alt="arrow_diagonal" />
        </a>
      </div>
      <div className={styles.carousel}>
        <button className={styles.prevButton} onClick={() => handleSlide('prev')}>
          {'<'}
        </button>

        <div className={styles.carouselWrapper} ref={carouselRef}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${
                index === currentIndex ? styles.active : styles.inactive
              }`}
              onClick={() => handleSelectImage(index)}
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

        <button className={styles.nextButton} onClick={() => handleSlide('next')}>
          {'>'}
        </button>
      </div>
    </div>
  );
};
