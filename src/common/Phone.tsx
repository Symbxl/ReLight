import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";
import { PiPhoneCallFill } from "react-icons/pi";

export default function LightButton() {
  const { theme } = useTheme();

  const Button = styled.button`
    height: 30px;
    width: 35px;
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
    window.location.href = "tel:4254651290";
  };

  return (
    <Button onClick={handleClick}>
      <PiPhoneCallFill />
    </Button>
  );
}
