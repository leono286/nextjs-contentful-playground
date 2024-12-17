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

const getNavbarLogo = async () => {
  const entries = await client.getEntries({content_type: "navBarLogo"})
  return entries;
}

export default async function Home() {
  const resLogo = await getNavbarLogo();
  const response = await getNavbarLinks();
  
  const navBarLinks = response.items[0].fields.linksArray
  const navBarLogo = resLogo.items[0].fields.navBarLogo.fields.file

  return (
    <div className={styles.page}>
      <Navbar img={navBarLogo} links={navBarLinks} />
    </div>
  );
}
