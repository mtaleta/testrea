import React, { Component } from 'react'
import { Badge } from 'reactstrap';
import Nav from './post_nav'
import Jumbotron from './Jumbotron'
import Card from './Card'

export default class PostsIndex extends Component {
  render() {
    return (
      <div className='container'>
        <Nav></Nav>
        <Jumbotron></Jumbotron>
        <Card></Card>
        <Card></Card>
        <Card></Card>
          <h1>Heading <Badge color="secondary">New</Badge></h1>
          <h2>Heading <Badge color="secondary">New</Badge></h2>
          <h3>Heading <Badge color="secondary">New</Badge></h3>
          <h4>Heading <Badge color="secondary">New</Badge></h4>
          <h5>Heading <Badge color="secondary">New</Badge></h5>
          <h6>Heading <Badge color="secondary">New</Badge></h6>
      </div>
    );
  }
}