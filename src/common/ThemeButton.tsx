import styled from "styled-components"
import { useTheme } from "../context/ThemeProvider";
import { IoMdSettings } from 'react-icons/io';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  const Button = styled.button`
  height: 35px;
  width: 35px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #969fafa1;
  border-radius: 25px;
  background: transparent;
  color: ${theme};
`
  return (
    <Button >
      <IoMdSettings />
    </Button>
  );
}
