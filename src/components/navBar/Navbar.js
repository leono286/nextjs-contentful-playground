import styles from "./Navbar.module.css"
import Image from "next/image";

function Navbar(props) {
  const { img, links } = props;  

  return (
  <nav className={styles.navbar}>
    <Image className={styles.navbarLogo}
    src={"https:" + img.url} 
    alt="logo impulsa" 
    width={109.47}
    height ={100}
    />
    <div className={styles.linksWrapper}>
      {links.map((link) => {
        const text = link.fields.text;
        const href = link.fields.href;
        const isCta = link.fields.isCta;
        return <a key={link.sys.id} className={isCta ? styles.linkCta : ""} href={href}>
           {isCta && (
          <img 
            src="/icons/favorite.png" 
            alt="Ícono favorito" 
            className={styles.ctaIcon} 
          />
        )}
          {text}
          </a>
      })}
    </div>
  </nav>);
}

export default Navbar;
