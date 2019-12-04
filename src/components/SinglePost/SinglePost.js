import React from "react";

import "./SinglePost.css";

import PostActions from "../PostActions/PostActions";
import WriteComment from "../WriteComment/WriteComment";
import SingleComment from "../SingleComment/SingleComment";

import imageLorem from "../../assets/img/personas/cat.jpg";
import love from "../../assets/img/reactons/love.png";
import like from "../../assets/img/reactons/like.png";
import laugh from "../../assets/img/reactons/laugh.png";
import sad from "../../assets/img/reactons/sad.png";
import rage from "../../assets/img/reactons/rage.png";

function PostHeader({ author, date }) {
  return (
    <div className="postFeedCardHeader">
      <div className="section1header">
        <div className="postListPic">
          <img src={author.avatar} />
        </div>
        <div className="postListInfos">
          <span className="postListTitle">{author.name}</span>
          <span className="postListDate">{date}</span>
        </div>
      </div>

      <div className="optionsHeader">
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <>
      {comments.map(comment => (
        <div key={comment.id} className="singleCommentContainer">
          <img src={comment.author.avatar} />
          <div className="uniqueComment">
            <div className="theComment">
              <a href="#">{comment.author.name}</a> {comment.content}
            </div>
            <div className="commentActions">
              <a href="#">Curtir</a>
              <a href="#">Responder</a>
              <span>1h</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="postFeedCard">

      <PostHeader author={author} date={date} />

      <div className="postFeedCardContent">
      {content}
      </div>

      <div className="postFeedReactons">
        <div className="section1Reactons">
          <img src={love} />
          <img src={laugh} />
          <span className="reactonCounter">8</span>
        </div>
        <div className="section2Reactons">1 compartilhamento</div>
      </div>

      <PostActions />
      <WriteComment />

      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
