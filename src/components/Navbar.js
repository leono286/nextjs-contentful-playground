import styles from "./Navbar.module.css"
import Image from "next/image";

function Navbar(props) {
  const { img, links } = props;

  console.log(img);
  

  return (<nav className={styles.navbar}>
    <Image 
    src={"https:" + img.url} 
    alt="logo impulsa"
    width={img.details.image.width}
    height ={img.details.image.height}
    />
    <div className={styles.linksWrapper}>
      {links.map((link) => {
        const text = link.fields.text;
        const href = link.fields.href;
        const isCta = link.fields.isCta;
        return <a key={link.sys.id} className={isCta ? styles.linkCta : ""} href={href}>{text}</a>
      })}
    </div>
  </nav>);
}

export default Navbar;
