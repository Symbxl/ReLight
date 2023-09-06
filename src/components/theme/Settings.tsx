import { useState } from "react";
import Modal from "../Modal";
import { BsToggles } from 'react-icons/bs';
import { useTheme } from "../../context/ThemeProvider"
import styled from "styled-components"
import SelectTheme from "./SelectTheme";
import DarkButton from "../../common/DarkButton";
import LightButton from "../../common/LightButton";
import { Link } from "react-router-dom";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const Container = styled.div`
    display: flex;
    width: 100px;
    justify-content: space-around;
  `
  const Button = styled.button`
  height: 35px;
  width: 35px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #969faf62;
  border-radius: 25px;
  background: transparent;
  color: ${theme};
`

  const Label = styled.label`
  margin: 2.5rem 0 1rem 0;
  font-size: 13px;
`

  return <>
    <Button onClick={handleOpen}><BsToggles /></Button>

    <Modal isOpen={isOpen} handleClose={handleClose}  >
      <Label>Choose Theme: </Label>
      <Container>
        <LightButton />
        <DarkButton />
      </Container>
      <SelectTheme />

    </Modal>
  </>
}

export default Settings;
