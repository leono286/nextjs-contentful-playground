"use client";
import styles from "./Navbar.module.css"
import Image from "next/image";
import { useMenu } from "../../contexts/MenuContext"

function Navbar(props) {
  const { logo, links , logoText} = props;  
  const {menuOpen, setMenuOpen} = useMenu(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const ctaLink = links.find(link => link.fields.isCta)?.fields.href || "#"

  return (
  <nav className={styles.navbar}>
     <div className={styles.navbarIcons}>
      <img className={styles.menuButton}
      src={`${menuOpen ? "/icons/close.png":"/icons/menu.png"}`}
      onClick={toggleMenu}
      />
        <div className={styles.logoContent}>
          <Image
          src={`https:${logo.url}`}
          alt="logo impulsa" 
          width={33}
          height={32}
          className={styles.logo}
          />
          <Image
          src={`https:${logoText.url}`}
          alt="logo impulsa text" 
          width={70}
          height={16}
          className={styles.logoText}
          />
        </div>
        {menuOpen ? null : 
        <a className={styles.contentCTAMobile} href={ctaLink}>
          <img className={styles.heartIcon}
              src="/icons/favorite.png" 
              alt=""
            />
        </a>
        } 
      </div>
   
    <div className={` ${menuOpen ? styles.menuOpen : styles.linksWrapper}`}>
      {links.map((link, index) => {
        const text = link.fields.text;
        const href = link.fields.href;
        const isCta = link.fields.isCta;
        return <a 
            key={link.sys.id} 
            className={isCta 
            ? styles.linkCta 
            : styles.linkNoCta} 
            href={href}>
            {isCta && (
            <img
              src="/icons/favorite.png" 
              alt="Corazon" 
            />  
          )}
         <p>{text}</p>
          {(index === 1 || index === 2) && (
          <img 
          src="/icons/keyboard_arrow_down.png" 
          alt="arrow_down" 
          />
          )}
            </a>
      })}
    </div>
  </nav>
  );
}

export default Navbar;
