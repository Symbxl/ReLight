import styled from "styled-components"
import { useTheme } from "../context/ThemeProvider"
import { Link } from "react-router-dom"

const Button = ({ children, width, height, padding, margin }: any) => {
  const { theme } = useTheme()

  const Btn = styled(Link)`
  background-color: ${theme};
  border: none;
  border-radius: 5px;
  padding: ${padding};
  margin: ${margin};
  width: ${width};
  height: ${height};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

`

  return (
    <Btn to="/contact">{children}</Btn>
  )
}

export default Button;
