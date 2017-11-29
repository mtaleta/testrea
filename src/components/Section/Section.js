import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { AnimatedRoute } from 'react-router-transition'
import styled from 'styled-components'
import DetailPage from './Detail'
// import Title from '../../containers/Menu'
// import FontAwesome from 'react-fontawesome'
import menuJson from '../../api/menuJson.json';

const GoHome = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0px;
  width: 60px;
  height: 100vh;
  background-color: white;
  color: #555;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  transform: translateX(-60px);
  display: flex;
  justify-content: center;
  align-items: center;
  &.slideIn {
    opacity: 1;
    transform: translateX(0px);
  }
  &:hover {
    background-color: #555;
    color: white;
    .bounce{
      animation-iteration-count: infinite;
    }
`
const Menus = styled.div`
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
  height: @menu_height;
  background: white;
  color: #555;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &.slideIn {
    // display: block;
    opacity: 1;
  }

  .link {
    margin-right: 10px;
    color: inherit;
  }
`
export default class Section extends Component {
 
  goDetail = (key) => {
    this.props.history.push(`/detail/${type}`)
  }

  goHome = () => {
    this.props.history.push('/')
  }
  render() {
    const { isExact } = this.props.match;
    
    document.getElementsByTagName('html')[0].style.overflow = isExact ? 'auto' : 'hidden';
    
    return (
      <div>
        {/* <Title 
          goDetail={this.goDetail}
        /> */}
        <Menus className={`menu ${!isExact && 'slideIn'}`}>
          {
            menuJson.map(sectionData => (
              <Link key={sectionData.key} className="link" to={`/detail/${sectionData.key}`}>{sectionData.title}</Link>
            ))
          }
        </Menus>
        <br /><br /><br />
        <Link to='/detail'>Show sidebar</Link>
        <GoHome className={`goHome ${!isExact && 'slideIn'}`} onClick={this.goHome}>
          <div className="animated bounce">
            {/* <FontAwesome name="chevron-left" /> */}
          </div>
        </GoHome>
        <AnimatedRoute
          path='/detail/:type'
          style={{
            'position': 'fixed',
            'z-index': '10',
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

Section.PropTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
}
