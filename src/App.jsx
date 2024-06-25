

import styled from "styled-components"
import Start from "./components/Start"
import Game from "./components/Game"
import { useState } from "react"



const Button = styled.button `
  background-color: black;
  color: white;
  padding: 10px;
`

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (
    <>
      {isGameStarted ? <Game/> : <Start toggle = {toggleGamePlay} /> }
    </>
  )
}

export default App
