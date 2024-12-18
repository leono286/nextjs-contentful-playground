import { HeroSection } from "@/components/heroSection/HeroSection";
import styles from "./page.module.css";
import Navbar from "@/components/navBar/Navbar";
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

const getHomeHeroSection = async () => {
  const entries = await client.getEntries({content_type: "heroSectionContent"})
  return entries;
}

export default async function Home() {
  const resLogo = await getNavbarLogo();
  const resLinks = await getNavbarLinks();
  const resHeroSection= await getHomeHeroSection();

  const navBarLinks = resLinks.items[0].fields.linksArray
  const navBarLogo = resLogo.items[0].fields.navBarLogo.fields.file

  const slogan = resHeroSection.items[0].fields.contentArray[0].fields.slogan;
  const sloganDetail = resHeroSection.items[0].fields.contentArray[1].fields.slogan;
  const heroImg = resHeroSection.items[0].fields.contentArray[2].fields.heroImg.fields.file;
  const heroLink = resHeroSection.items[0].fields.contentArray[3].fields;

  return (
    <div className={styles.page}>
      <Navbar img={navBarLogo} links={navBarLinks} />
      <HeroSection img={heroImg} slogan={slogan} sloganDetail={sloganDetail} link ={heroLink} />
    </div>
  );
}
