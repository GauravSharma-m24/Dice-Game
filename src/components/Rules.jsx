import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <div className="rulebox">
            <h2>How to play Dice Game</h2>
            <ul>
                <li>Select any number</li>
                <li>Click on Dice to guess the number</li>
                <li>If the guess is correct then you will get the points equal to the number on dice; 
                    else 2 points will be deducted from your score. </li>
            </ul>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div `
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #a2f1ff;
    margin-top: 50px;

    h2 {
        margin-left: 35px;
        font-weight: bolder;
    }

    ul {
        list-style: none;
        margin-right: 40px;
    }

    ul li {
        font-size: 18px;
        font-weight: 700;
    }
`