import React, { Component } from "react";

import "./PostList.css";

import imageLorem from "../../assets/img/personas/cat.jpg";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2
        // Restante dos dados de um novo post
      }
    ]
  };
  render() {
    return (
      <div className="postFeedCard">
        <div className="postFeedCardHeader">
          <div className="section1header">
            <div className="postListPic">
              <img src={imageLorem} />
            </div>
            <div className="postListInfos">
              <span className="postListTitle">Léu Almeida</span>
              <span className="postListDate">7h</span>
            </div>
          </div>

          <div className="optionsHeader"><i className="fas fa-ellipsis-h"></i></div>
        </div>

        <div className="postFeedCardContent">
          
        </div>
      </div>
    );
  }
}

export default PostList;
