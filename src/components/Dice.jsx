
import styled from "styled-components"

const Dice = ({rollDice,currentDice}) => {

   

   

  return (
   <DiceContainer>
    <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="Dice 1" />
    </div>
    <p>Click On Dice to roll</p>
   </DiceContainer>
  )
}

export default Dice

const DiceContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    p {
        font-size: 24px;
    }

`