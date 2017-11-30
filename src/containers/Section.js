import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import { AnimatedRoute } from 'react-router-transition'
import styled from 'styled-components'
import DetailPage from './Detail'
import Title from './Menu'
// import FontAwesome from 'react-fontawesome'
import menuJson from '../api/menuJson.json'

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
  height: 40px;
  background: white;
  color: #555;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &.slideIn {
    opacity: 1;
  }

  .link {
    margin-right: 10px;
    color: inherit;
    text-decoration: none;
    padding: 2px 6px;
    transition: all 300ms linear;
    line-height: @menu_height;
    color: #555;
    &:hover {
      color: #9d68ff;
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
`
export default class Section extends Component {
  constructor (props) {
    super(props)

    this.goDetail = this.goDetail.bind(this)
    this.goHome = this.goHome.bind(this)
  }
  goDetail (key) {
    this.props.history.push(`/detail/${key}`)
  }

  goHome () {
    this.props.history.push('/')
  }
  render () {
    const { isExact } = this.props.match

    document.getElementsByTagName('html')[0].style.overflow = isExact ? 'auto' : 'hidden'

    return (
      <div>
        <Menus className={`menu ${!isExact && 'slideIn'}`}>
          {
            menuJson.map(sectionData => (
              <Link key={sectionData.key} className='link' to={`/detail/${sectionData.key}`}>{sectionData.title}</Link>
            ))
          }
        </Menus>
        { /* <Link to='/detail'
          style={{
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'height': '100vh',
            'width': '100%',
            'position': 'absolute'
          }}
        >
          點我點我
        </Link> */}
        <Title />
        <GoHome className={`goHome ${!isExact && 'slideIn'}`} onClick={this.goHome}>
          <div className='animated bounce'>
            {/* <FontAwesome name="chevron-left" /> */}
          </div>
        </GoHome>
        <AnimatedRoute
          path='/detail'
          style={{
            'position': 'fixed',
            'z-index': '10',
            'top': '40px',
            'left': '60px',
            'width': '100vh'}}
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
  match: PropTypes.object
}
