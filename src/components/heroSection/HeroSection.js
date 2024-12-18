import Image from "next/image"
export const HeroSection = (props) => {
const {img, slogan, sloganDetail, link} = props


  return (
    <div>
        <Image
        src={"https:" + img.url}
        alt="Hero Section"
        width={1439}
        height ={570}
        />
    </div>
  )
}
