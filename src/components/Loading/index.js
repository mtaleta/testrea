import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
  margin:0;
  padding:0;

`
const AnimalLoading = styled.div`
  @keyframes caret {
    50% {border-color: transparent;}
  }
  @keyframes text {
      from {width: 0;}
  }
`

const LoadingContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width:400px;
  height: 100px;
  margin: 20px auto;
  border: 3px solid #444;
`

// 1ch就是當前字體環境中數字 0 的寬度
// 在字體為monospace的情況，1ch就是所有字符的寬度。
// overflow:hidden;和word-break:keep-all;
// 防止中文字符在標籤寬度不夠時出現自動換行
// animation:text 5s infinite steps(11);
// 利用steps()值設定步長，因為一共11ch的長度，所以設定11個步長。
// 設置infinite實現無限循環。
// 注意：中文的長度是2個字符長度，設定的步長和寬度要X2。
const LoadText = styled.div`
  width: 8ch;
  margin: 0 auto;
  overflow: hidden;
  word-break: keep-all;
  background: rgba(181, 219, 136,0.2);
  color: #b1f1f3;
  border-right: 3px solid #000000;
  font: bold 400% Consolas, Monaco, monospace;
  animation: caret 0.5s step-end infinite ,text 5s infinite steps(8);
`

const AnimalCircle = styled.div`
  @keyframes circle {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
  }
`
const LoadingCircle = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border-top: 8px solid #F3ECC8;
  border-left: 8px solid #F3ECC8;
  border-bottom: 8px solid #F3ECC8;
  border-right: 8px solid #78C2C3;
  animation: circle 0.5s infinite linear;
`
// 背景圖片引入有問題background-image: url(./loading.png)
const LoadingCircleGradient = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto;

  background-size: cover;
`

const Mask = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 0;
  height: 0;
  border: 45px solid transparent;
  border-left: 45px solid rgba(255, 254, 254, 0.7);
  animation: circle 0.5s infinite linear;
`

// 圖形圍繞
const Round = styled.div`
  @keyframes round {
    50% {
        margin-left: 25px;
    }
    100%{
        z-index: 5;
    }
  }
`

const CircleOne = styled.div`
  position: absolute;
  margin-left: -25px;
  border-radius: 50%;
  display: inline-block;
  width: 20px;
  height: 20px;
  z-index: -5;
  background-color: rgb(191, 241, 10);
  animation: round 2s infinite linear;
`

const CircleTwo = styled.div`
  border-radius: 50%;
  display: inline-block;
  width: 20px;
  height: 20px;
  z-index: 0;
  background-color: rgb(241, 168, 10);
`

const Loading = props => {
  return <Wrapper>
    {props.children}
  </Wrapper>
}

Loading.Wrapper = Wrapper
Loading.AnimalLoading = AnimalLoading
Loading.LoadingContainer = LoadingContainer
Loading.LoadText = LoadText

Loading.AnimalCircle = AnimalCircle
Loading.LoadingCircle = LoadingCircle

Loading.Round = Round
Loading.CircleOne = CircleOne
Loading.CircleTwo = CircleTwo

Loading.LoadingCircleGradient = LoadingCircleGradient
Loading.Mask = Mask
export default Loading
