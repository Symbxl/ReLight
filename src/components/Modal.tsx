import { styled } from "styled-components";
import { useNightMode } from "../context/NightModeProvider";
const Modal = ({ isOpen, children, handleClose }: any) => {
  const { nightMode } = useNightMode()

  const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${nightMode ? "#0d111eee" : "#ffffffea"};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  `

  const Close = styled.button`
  height: 35px;
  width: 35px;  
  margin: 1rem;
  align-self: end;
  border: none;
  font-size: 20px;
  background-color: transparent;
  color: ${nightMode ? "#FFFBFF" : "#0e1320"};
`

  return (<>
    {isOpen && (
      <Container>
        <Close onClick={handleClose}>x</Close>
        <ChildContainer>
          {children}
        </ChildContainer>
      </Container>
    )}
  </>);
}

export default Modal;



const ChildContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 200px;
`

