import ServicesCard from "../components/cards/ServicesCard";
import styled from "styled-components"
import { PiHeadsetBold } from "react-icons/pi"
import { AiFillRocket, AiOutlineTool } from "react-icons/ai"

const DisplayServices = () => {
  const service = [
    { number: <PiHeadsetBold />, title: "24/7 Support", desc: "ReLight Outdoor Lighting works with a team of professionals to ensure full customer support. If you experience any issues with our product please contact us via phone or email for assistance." },
    { number: <AiFillRocket />, title: "Quick delivery", desc: "ReLight Outdoor Lighting has a dedicated service team in Grande Prairie. Our team is trained to provide professional installation on the same service day." },
    { number: <AiOutlineTool />, title: "Warranty Protection Included", desc: "ReLight’s Lighting manufacturer provides a 3 year product warranty. The technology on our lights provide a 5-10 year lifetime." }
  ]

  const services = [
    { number: 1, title: "Step One: Request a quote", desc: "Our team offers fast, visit free quotes. Please reach out via the contact form providing your name, address, and phone number. Our team will get back to you quick with a quote as well as potential service dates." },
    { number: 2, title: "Step Two: Receive an estimate", desc: "Our team will do on online quote (via Google Earth) and get back to you with a price as well as potential servicing dates." },
    { number: 3, title: "Step Three: Enjoy you're lights", desc: "Enjoy your home shining year round! Any season, any holiday, any occasion. Merry Christmas from ReLight Outdoor Lighting!" }
  ]
  return (<Container>
    <ServicesCard services={services} />
    <ServicesCard services={service} />
  </Container>);
}

export default DisplayServices;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
`