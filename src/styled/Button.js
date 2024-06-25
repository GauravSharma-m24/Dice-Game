import styled from "styled-components"

export const Button = styled.button `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;

  width: 220px;
  height: 44px;

  background: #000000;
  color: white;
  border-radius: 5px;
  min-width: 220px;
  border: none;

  font-size: 15px;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.4s background ease-in;
  }
`
export const OutlineButton= styled(Button) `
  
  background-color: white;
  color: black;
  border: 1px solid black;
  font-weight: bolder;
  font-size: 20px;
  transition: 0.4s background ease-in;


  &:hover {
    background-color: black;
    color: white;
    transition: 0.4s background ease-in;
  }
`
