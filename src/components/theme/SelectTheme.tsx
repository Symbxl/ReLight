import { useTheme } from '../../context/ThemeProvider'
import styled from "styled-components"

const SelectTheme = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = (event: any) => {
    event.preventDefault();
    setTheme(event.target.value)
  };

  const Button = styled.button`
    background-color: transparent;
    border: 1px solid #969faf62;
    color: ${theme};
    border-radius: 5px;
    margin: 1rem;
    padding: 5px 10px;
  `

  return (
    <Container>
      <Label>Theme Color:</Label>
      <GroupOne>
        <Button onClick={handleClick} value="#007FFF">Blue</Button>
        <Button onClick={handleClick} value="#FF5154">Red</Button>
        <Button onClick={handleClick} value="rgb(158, 119, 237)">Purple</Button>
        <Button onClick={handleClick} value="#FF9FE5">Pink</Button>
      </GroupOne>
      <GroupTwo>
        <Button onClick={handleClick} value="rgb(249, 98, 28)">Orange</Button>
        <Button onClick={handleClick} value="#E0CA3C">Yellow</Button>
        <Button onClick={handleClick} value="rgb(22, 179, 100)">Green</Button>
      </GroupTwo>
    </Container >
  );
}

export default SelectTheme;


const Container = styled.div`
height: 450px;
width: 500px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: start;
`

const GroupOne = styled.div`

`

const GroupTwo = styled.div`
  
`

const Label = styled.label`
  margin-top: 1rem;
  font-size: 13px;
`