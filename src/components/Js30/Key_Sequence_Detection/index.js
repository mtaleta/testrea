import React, { Component } from 'react'
import { Div, PageHome, Notice, Button, Example } from './style'

export default class Key extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pressed: [],
      secret: ['r', 'e', 'a', 'c', 't'],
      buttonDisabled: true
    }
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  componentDidMount () {
    window.addEventListener('keyup', this.onKeyPress)
  }
  onKeyPress (e) {
    const key = e.key
    if (key === this.state.secret[this.state.pressed.length]) {       // 陣列長度與輸入的長度相同
      const newPressed = this.state.pressed
      newPressed.push(key)                                            // 輸入key
      if (newPressed.join('') === this.state.secret.join('')) {       // 當輸入的內容與secret完全相通
        this.setState({ pressed: newPressed, buttonDisabled: false }) // 傳入press並且解除disable
      } else {
        this.setState({ pressed: newPressed })                        // 字母存入press
      }
    } else {
      this.setState({ pressed: [], buttonDisabled: true })            // 當輸入字母不同時就清空
    }
  }

  render () {
    return (
      <Div>
        <PageHome>
          <Button disabled={this.state.buttonDisabled} onClick={() => alert('恭喜')}>Click me</Button>
          <Notice>輸入以下英文可以解鎖</Notice>
          <div>
              {this.state.secret.map(code => (<Example key={Math.random()}>{code}</Example>))}
          </div>
          <Notice>目前輸入</Notice>
          <div>
            {this.state.pressed.map(code => (<Example key={Math.random()}>{code}</Example>))}
          </div>
        </PageHome>
      </Div>
    )
  }
}
