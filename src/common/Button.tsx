import styled from "styled-components"
import { useTheme } from "../context/ThemeProvider"
import { Link } from "react-router-dom"

const Button = ({ children, border, width, height, padding, margin, handleClose }: any) => {
  const { theme } = useTheme()

  const Btn = styled(Link)`
  background-color: ${theme};
  border: ${border};
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
    <Btn to="/contact" onClick={handleClose}>{children}</Btn>
  )
}

export default Button;

