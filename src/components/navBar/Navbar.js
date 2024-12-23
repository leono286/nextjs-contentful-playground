import styles from "./Navbar.module.css"
import Image from "next/image";

console.log(styles)

function Navbar(props) {
  const { logo, links , logoText} = props;  

  return (
  <nav className={styles.navbar}>
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


    <div className={styles.linksWrapper}>
      {links.map((link) => {
        const text = link.fields.text;
        const href = link.fields.href;
        const isCta = link.fields.isCta;
        return <a key={link.sys.id} className={isCta ? styles.linkCta : styles.linkNoCta} href={href}>
           {isCta && (
          <img 
            src="/icons/favorite.png" 
            alt="Ícono favorito" 
          />
        )}
          {text}
          </a>
      })}
    </div>
  </nav>);
}

export default Navbar;
