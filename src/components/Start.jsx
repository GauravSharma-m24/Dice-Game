
import styled from 'styled-components'
import { Button } from '../styled/Button';

const Start = ({toggle}) => {
  return (
   
        <Container>
          <div>
          <img src="/images/dices.png" alt="" />
          </div>
          <div className='content'>
            <h1>
              DICE GAME
            </h1>
            <Button onClick={toggle}>START GAME</Button>
          </div>
        </Container>

  )
}

export default Start

const Container = styled.div `
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  

  .content h1 {
    font-size: 100px;
    white-space: nowrap;
    font-weight: bolder;
    margin-left: 100px;
  }

  Button {
    font-weight: bold;
    font-size: 20px;
    margin-left: 100px;
  }
`;

