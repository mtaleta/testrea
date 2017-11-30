import styled from 'styled-components'

const Cards = styled.div`
  width: 450px;
  height: 150px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 10px 10px 100px rgba(0,0,0,.12);
  border-radius: 6px;
  font-family: 'Monda', sans-serif;
`

const CardImg = styled.div`
  width: 180px;
  background-color: #333;
  cursor: pointer;
`

const CardInfo = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  min-width: 0;
`

const CardTitle = styled.div`
  color: #00bcd4;
  font-size: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  letter-spacing:-2px;
`

const CardDes = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #999;
  height: 60px;
  overflow: hidden;
`
const CardButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: flex-end;
`
const CardCircle = styled.div`
  margin: 0 10px;
  text-align: center;
  font-size: 25px;
  transition: .25s all;
  &:hover{
    transform: scale(1.5) rotate(370deg);
  }
`
const Demo = styled.div`
  color: rgb(255, 101, 116);
`
const Repo = styled.div`
  color: #555;
`
const Card2 = props => {
  return <Cards>
    {props.children}
  </Cards>
}

Card2.CardButton = CardButton
Card2.CardDes = CardDes
Card2.CardImg = CardImg
Card2.CardInfo = CardInfo
Card2.Cards = Cards
Card2.CardTitle = CardTitle
Card2.CardCircle = CardCircle
Card2.Repo = Repo
Card2.Demo = Demo

export default Card2
