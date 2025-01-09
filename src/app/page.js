import { HeroSection } from "@/components/heroSection/HeroSection";
import Navbar from "@/components/navBar/Navbar";
import { createClient } from "contentful";
import { MenuProvider } from "../contexts/MenuContext"

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
  const navBarLogo = resLogo.items[1].fields.navBarLogo.fields.file
  const navBarLogoText = resLogo.items[0].fields.navBarLogo.fields.file

  const heroSectionItems = resHeroSection.items[0].fields.contentArray


  return (
    <>
      <MenuProvider>
        <Navbar logo={navBarLogo} logoText={navBarLogoText} links={navBarLinks} /> 
        <HeroSection items={heroSectionItems}/>
      </MenuProvider>
    </>
  );
}
