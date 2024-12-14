import styles from "./Navbar.module.css"

function Navbar(props) {
  const {img, links} = props;

  return (<nav className={styles.navbar }>
    <img src={img} alt="logo impulsa" />
    <div className={styles.linksWrapper}>
    {links.map((link) => (<a className={link.isCTA ? styles.linkCta : ""} href={link.href}>{link.text}</a>))}
    </div>
  </nav>);
}

export default Navbar;
