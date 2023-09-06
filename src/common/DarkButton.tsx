import { useNightMode } from "../context/NightModeProvider";
import styled from "styled-components"
import { FiMoon } from 'react-icons/fi';
import { useTheme } from "../context/ThemeProvider";

export default function LightButton() {
  const { nightMode, setNightMode } = useNightMode();
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
    setNightMode(true)
    document.body.className = "NightMode"
  };



  return <>
    <Button onClick={toggleTheme} >
      <FiMoon />
    </Button>
  </>
}
