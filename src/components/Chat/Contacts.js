import React from "react";

import cat from "../../assets/img/personas/cat.jpg";
import girl from "../../assets/img/personas/girl.png";
import girl2 from "../../assets/img/personas/girl2.jpg";
import girl3 from "../../assets/img/personas/girl3.jpg";
import girl4 from "../../assets/img/personas/girl4.png";
import man from "../../assets/img/personas/man.jpg";
import man2 from "../../assets/img/personas/man2.jpg";

function Contacts() {
  return (
    <>
      <div className="title">
        <span>CONTATOS</span>
      </div>

      <div className="contacts">
        <div className="contact">
          <img src={cat} />
          <span>Leonardo Almeida</span>
        </div>
        <div className="contact">
          <img src={girl} />
          <span>Erick Firmo</span>
        </div>
        <div className="contact">
          <img src={girl2} />
          <span>Thiago Tamosau...</span>
        </div>
        <div className="contact">
          <img src={girl3} />
          <span>Felipe Moraes</span>
        </div>
        <div className="contact">
          <img src={girl4} />
          <span>Fernanda Kian</span>
        </div>
        <div className="contact">
          <img src={man} />
          <span>Fernando Zanc...</span>
        </div>
        <div className="contact">
          <img src={man2} />
          <span>Lucca Trevisan</span>
        </div>
      </div>
    </>
  );
}

export default Contacts;
