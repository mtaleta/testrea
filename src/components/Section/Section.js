import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { AnimatedRoute } from 'react-router-transition'
import styled from 'styled-components'
import DetailPage from './Detail'
import Title from '../../containers/Menu'

const GoHome = styled.div`
  position: fixed;
  top: 40px;
  left: 0px;
  width: 60px;
  height: 100vh;
  background: yellow;
  opacity: 1;
  transition: all 5s ease-in-out;
  &.slideIn {
    opacity: 1;
  }
`
const Menus = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  background: pink;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  &.slideIn {
    opacity: 1;
  }
  .link {
    margin-right: 10px;
  }
`
export default class Section extends Component {

  goDetail = (key) => {
    this.props.history.push('/detail');
  }

  render() {
    const { isExact } = this.props.match;
    
    document.getElementsByTagName('html')[0].style.overflow = isExact ? 'auto' : 'hidden';
    
    return (
      <div>
        <Title 
          goDetail={this.goDetail}
        />
        <Menus className={`menu`}>
          1231232222222222222222222222222222222222222
        </Menus>
        <br /><br /><br />
        <Link to='/detail'>Show sidebar</Link>
        <GoHome className={`goHome`}>
          <Link to='/'>{'<-'}</Link>
        </GoHome>
        <AnimatedRoute
          path='/detail'
          style={{
            'position': 'fixed',
            'top': '40px',
            'left': '60px',
            'width': 'calc(~"100% - 60px")'}}
          component={DetailPage}
          atEnter={{ offset: 100 }}
          atLeave={{ offset: 100 }}
          atActive={{ offset: 0 }}
          mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`
          })}
        />
      </div>
    )
  }
}
