import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";


interface ICommentsPromps{ content: string, 
  onDeleteComment: (comment: string) => void;
}

//: (param: string) => void
export function Comment({ content, onDeleteComment } : ICommentsPromps) {
 const[likeCout,setLikeCount]=useState(0)


  function handleDeleteComment() {
    onDeleteComment(content);
  }
  function handleLikeComment(){
    setLikeCount(likeCout+1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} 
      imageURL="https://github.com/AndreAugustoJunior.png"
    />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Andre Junior</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCout}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
