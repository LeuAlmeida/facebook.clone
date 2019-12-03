import React from 'react';

import './Main.css';
import NewPost from '../NewPost/NewPost';
import Feed from '../Feed/Feed';

function Main() {
  return (
    <div className="mainContent">
      <NewPost />
      <Feed />
    </div>
  )
}

export default Main;