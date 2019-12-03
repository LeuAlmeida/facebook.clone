import React from 'react'

import PostList from '../PostList/PostList';

import './Feed.css';

function Feed() {
  return (
    <div className="feedContainer">
      <PostList />
    </div>
  )
}

export default Feed;