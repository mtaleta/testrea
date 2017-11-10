import Component from 'components/Component.jsx';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
import PostForm from 'components/PostForm.jsx';
import PostList from 'components/PostList.jsx';
import { Jumbotron, Button, InputGroup, InputGroupButton, Input, ButtonGroup} from 'reactstrap';

export default class Main extends React.Component {
   

    render() {
        return (
            <div className='posts'>
                <PostForm onPost={this.handleCreatePost} />
                <PostList posts={posts} onVote={this.handleCreateVote} />{
                    postLoading &&
                    <Alert color='warning' className='loading'>Loading...</Alert>
                }
            </div>
        );
    }
}
