import styles from "./Navbar.module.css"

function Navbar(props) {
  const { img, links } = props;

  console.log(links);
  

  return (<nav className={styles.navbar}>
    <img src={img} alt="logo impulsa" />
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
