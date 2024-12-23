"use client";
import styles from "./Navbar.module.css"
import Image from "next/image";
import { useState } from "react";

function Navbar(props) {
  const { logo, links , logoText} = props;  
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
  <nav className={styles.navbar}>

    <img
    className={styles.menuButton}
    src="/icons/menu.png"
    onClick={toggleMenu}
    />
      <div className={styles.logoContent}>
      <Image
      src={`https:${logo.url}`}
      alt="logo impulsa" 
      width={55.83}
      height ={53.24}
      />
      <Image
      src={`https:${logoText.url}`}
      alt="logo impulsa text" 
      width={89.71}
      height ={20.03}
      />
      </div>
      <div className={styles.contentCTAMobile}>
        <img className={styles.corazon}
            src="/icons/favorite.png" 
            alt="Corazon"
          />
      </div>
      


    <div className={`${styles.linksWrapper} ${menuOpen ? styles.menuOpen : ''}`}>
      {links.map((link) => {
        const text = link.fields.text;
        const href = link.fields.href;
        const isCta = link.fields.isCta;
        return <a key={link.sys.id} className={isCta ? styles.linkCta : styles.linkNoCta} href={href}>
           {isCta && (
          <img 
            src="/icons/favorite.png" 
            alt="Corazon" 
          />
        )}
          {text}
          </a>
      })}
    </div>
  </nav>);
}

export default Navbar;
