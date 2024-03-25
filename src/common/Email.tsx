import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";
import { MdOutlineMailOutline } from "react-icons/md";

export default function LightButton() {
  const { theme } = useTheme();

  const Button = styled.button`
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

  const handleClick = () => {
    window.location.href = "mailto:inquiezach@gmail.com";
  };

  return (
    <Button onClick={handleClick}>
      <MdOutlineMailOutline />
    </Button>
  );
}

