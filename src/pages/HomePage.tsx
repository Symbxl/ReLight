import Header from "../components/Header";
import SectionOne from "../components/Video";
import SectionTwo from "../common/SectionTwo";
import Video from "../components/Video"
import DisplayServices from "../content/DisplayServices";
import SectionFive from "../common/SectionFive";

const HomePage = () => {
  return <>
    <Header />
    <Video />
    <SectionTwo title="Architectural Lighting" description="Add a touch of elegance and sophistication by replacing your pot or can lights with permanent track lighting. From sleek and modern to warm and inviting, our Architectural Lighting options offer something for every taste and style. Upgrade your home or commercial building today and experience the beauty and versatility of Architectural Lighting. With endless possibilities to choose from, you will find the perfect pattern to match any look you desire!" />
    <DisplayServices />
    <SectionTwo title="Seasonal & Holidays" description="Get ready to light up your home all year round with our permanent holiday lights! Say goodbye to the hassle of putting up and taking down Christmas lights every year. Our limitless options for lights and patterns allow you to celebrate any holiday or season, from Halloween and 4th of July to Valentines Day and beyond. With our permanent holiday lights, you can illuminate your home with festive cheer and add a touch of magic to any occasion." />
    <SectionFive title="Fast & Easy App!" description="Simply slide your fingertip on the color wheel to update the lighting. With 16 million colors and 50,000 shades of white, it gives you a chance to create fabulous home lighting for whether illuminating or entertainment. Match diverse occasions via multiple Scenes and Music Mode." image="https://i.imgur.com/KdEfeN8.jpg" left={true} right={false} />
    <SectionFive title="Timer Function" description="With our timer function, you can add your lights to your daily routine. Program your LED lights to power on/off automatically via the Govee Home App. With your very own lighting schedule, you'll always return to a brightly-lit home." image="https://cdn.shopify.com/s/files/1/0556/4203/0246/files/H6172-P-6.jpg?v=1646790742" left={false} right={true} />
  </>
}

export default HomePage;