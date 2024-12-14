import styles from "./page.module.css";
import Navbar from '@/components/Navbar';

const logoSrc = "https://media.licdn.com/dms/image/v2/C4E0BAQGTSDC7-5XmhQ/company-logo_200_200/company-logo_200_200/0/1630617093977?e=2147483647&v=beta&t=nEiBV9IZRynSGGq61NG8-yJwa41BRiOXbrzvINQO9ck"
const links = [{
  href: '#',
  text: 'Nuestra historia',
  isCTA: false
}, {
  href: '#',
  text: 'Nuestros proyectos',
  isCTA: false
}, {
  href: '#',
  text: 'Cómo sumarte',
  isCTA: false
}, {
  href: '#',
  text: 'Voluntarios',
  isCTA: false
}, {
  href: '#',
  text: 'Haz tu donación',
  isCTA: true
},
]

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar img={logoSrc} links={links} />
    </div>
  );
}
