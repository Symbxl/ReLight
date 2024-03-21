import styled from "styled-components"
import { useTheme } from "../context/ThemeProvider"

const Button = ({ children, width, height, padding, margin }: any) => {
  const { theme } = useTheme()

  const Btn = styled.button`
  background-color: ${theme};
  border: none;
  border-radius: 5px;
  padding: ${padding};
  margin: ${margin};
  width: ${width};
  height: ${height};
  color: white;
`

  return (
    <Btn>{children}</Btn>
  )
}

export default Button;
