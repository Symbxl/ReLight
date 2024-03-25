import { useNightMode } from "../context/NightModeProvider";
import styled from "styled-components"
import { BiSun } from 'react-icons/bi';
import { useTheme } from "../context/ThemeProvider";

export default function LightButton() {
  const { setNightMode } = useNightMode();
  const { theme } = useTheme()

  const Button = styled.button`
  height: 35px;
  width: 35px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #969faf62;
  border-radius: 25px;
  background: transparent;
  color: ${theme};
  box-shadow: (0, 0, 0, 0.08) 0px 1px 5px;
`

  const toggleTheme = () => {
    setNightMode(false)
    document.body.className = "LightMode"
  };



  return <>
    <Button onClick={toggleTheme} >
      <BiSun />
    </Button>
  </>
}
