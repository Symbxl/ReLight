import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";
import { Link } from "react-router-dom"
export default function ContactButton() {
  const { theme } = useTheme();

  const StyledLink = styled(Link)`
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #969faf62;
    border-radius: 25px;
    background: transparent;
    color: ${theme};
    box-shadow: 0 0 0 0.08rem rgba(0, 0, 0, 0.08);
    cursor: pointer;
    outline: none;
  `;

  return <StyledLink to="/contact">Contact</StyledLink>
}
