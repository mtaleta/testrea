import React, { Component } from 'react'
import Canvas from './canvas'
import { Link } from 'react-router-dom'
import Button from 'components/Buttons'

const CanvasStyle = {
  'position': 'absolute',
  'top': '0',
  'width': '100%',
  'height': '100%',
  'background': '#470024'
}

class CanvasIndex extends Component {
  componentDidMount () {
    const cx = document.getElementById('canvas')
    const ctx = cx.getContext('2d')
    const St = new Canvas(cx, ctx)
    // 調用Canvas的step function
    St.step()
    window.onresize = function () {
      St.cx.width = St.cx.clientWidth
      St.cx.height = St.cx.clientHeight
      if (St.dots.length === 0) {
        St.construct()
      }
      St.render()
    }

    cx.onMousemove = function (e) {
      St.mousePos[0] = e.clientX - cx.offsetLeft
      St.mousePos[1] = e.clientY - 64
    }
    // 事件會在窗口或框架被調整大小時發生
    window.onresize()
  }

  render () {
    return (
      <div>
        <div style={{'position': 'relative', 'height': '600px'}}>
          <canvas id='canvas' style={CanvasStyle} />
        </div>
        <Button>
          <Link to='/'>back</Link>
        </Button>
      </div>
    )
  }
}

export default CanvasIndex
