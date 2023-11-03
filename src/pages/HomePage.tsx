import Header from "../components/Header";
import SectionFour from "../components/SectionFour";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";

const HomePage = () => {
  return <>
    <Header />
    <SectionOne />
    <SectionTwo title="Architectural Lighting" description="Add a touch of elegance and sophistication by replacing your pot or can lights with permanent track lighting. From sleek and modern to warm and inviting, our Architectural Lighting options offer something for every taste and style. Upgrade your home or commercial building today and experience the beauty and versatility of Architectural Lighting. With endless possibilities to choose from, you will find the perfect pattern to match any look you desire!" />
    <SectionThree />
    <SectionTwo title="Seasonal & Holidays" description="Get ready to light up your home all year round with our permanent holiday lights! Say goodbye to the hassle of putting up and taking down Christmas lights every year. Our limitless options for lights and patterns allow you to celebrate any holiday or season, from Halloween and 4th of July to Valentines Day and beyond. With our permanent holiday lights, you can illuminate your home with festive cheer and add a touch of magic to any occasion." />
    <SectionFour />
  </>
}

export default HomePage;