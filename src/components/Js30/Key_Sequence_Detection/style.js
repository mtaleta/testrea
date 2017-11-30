import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #216160;
`
export const PageHome = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;
  color: #f898a6;
`

export const Notice = styled.div`
  margin: 10px 0;
  font-size: 16px;
  color: #ee637a;
`
export const Button = styled.button`
  border: none;
  border-radius: 5px;
  height: 36px;
  font-size: 20px;
  line-height: 36px;
  background-color: #ee637a;
  color: #216160;
  &:disabled {
      background-color: #D5D5D0;
      color: #8D8F94;
  }
  &:active{
    background-color: #ee637a;
  }
`
export const Example = styled.div`
  background-color: #449978;
  padding: 10px;
  font-size: 30px;
  border: 2px solid #449978;
  border-radius: 4px;
  margin: 5px;
  display: inline-block;
  justify-content: space-around;
  font-weight: 600;
`
