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

  const ctaLink = links.find(link => link.fields.isCta)?.fields.href || "#"

  return (
  <nav className={`${styles.navbar} ${menuOpen ? styles.menuOpen : styles.navbar}`}>
     <div className={`${menuOpen ? styles.openHamburguer : styles.closeHamburguer}`}>
      <img className={styles.menuButton}
      src={`${menuOpen ? "/icons/close.png":"/icons/menu.png"}`}
      onClick={toggleMenu}
      />
        <div className={styles.logoContent}>
          <Image
          src={`https:${logo.url}`}
          alt="logo impulsa" 
          width={113}
          height={32}
          className={styles.logo}
          />
          <Image
          src={`https:${logoText.url}`}
          alt="logo impulsa text" 
          width={113}
          height={32}
          className={styles.logoText}
          />
        </div>
        {menuOpen ? "" : 
        <a className={styles.contentCTAMobile} href={ctaLink}>
          <img className={styles.corazon}
              src="/icons/favorite.png" 
              alt="Corazon"
            />
        </a>
        } 
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
  </nav>
  );
}

export default Navbar;
