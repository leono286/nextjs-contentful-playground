import styles from "./page.module.css";
import Navbar from '@/components/Navbar';
import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

const getNavbarLinks = async () => {
  const entries = await client.getEntries({ content_type: "navBarLinksArray" });
  return entries;
};

const logoSrc = "https://media.licdn.com/dms/image/v2/C4E0BAQGTSDC7-5XmhQ/company-logo_200_200/company-logo_200_200/0/1630617093977?e=2147483647&v=beta&t=nEiBV9IZRynSGGq61NG8-yJwa41BRiOXbrzvINQO9ck"


export default async function Home() {
  
  const response = await getNavbarLinks();

  console.log(response);
  
  const navBarLinks = response.items[0].fields.linksArray
  

  return (
    <div className={styles.page}>
      <Navbar img={logoSrc} links={navBarLinks} />
    </div>
  );
}
