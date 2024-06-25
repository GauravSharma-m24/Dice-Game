import Dice from "./Dice"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const Game = () => {
  
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] =useState("")
  const [showRules, setShowRules] = useState(false)

  const RandomNumber = (min, max) => {
        
    return Math.floor(Math.random() * (max-min) + min);
}

const rollDice = () => {

    if(!selectedNumber) 
      {
        setError("Please select a number")
        return
      }
      

    const randomNumber = RandomNumber(1, 7)
    setCurrentDice((prev) => randomNumber)

    if(selectedNumber === randomNumber)
      {
        setScore((prev) => prev + randomNumber)
      }
    else
    {
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined)

}


const resetScore = () => {
  setScore(0)
}


  return (
    <MainContainer>
      <main>
        <TotalScore score={score} />
        <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
      </main>
      <Dice
      currentDice={currentDice}
      rollDice={rollDice}
      />
       
      <div className="btn">
        <OutlineButton onClick={resetScore}>RESET SCORE</OutlineButton>
        <OutlineButton onClick={() =>setShowRules(prev => !prev)}>{showRules ? "HIDE " : "SHOW "}
          RULES</OutlineButton>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
   
  )
}

export default Game

const MainContainer = styled.main `
  padding-top: 50px;

  main {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .btn {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
   
  }

  
`