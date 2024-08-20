import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';


interface IAuthor{
    name:string,
    role:string,
    avatarUrl:string
}

interface IContent{
    type:'paragraph' | 'link',
    constent:string
}

export interface IPostType{
    id:number,
    author:IAuthor,
    publishedAt: Date,
    content: IContent[]
}

interface IPostProps{
    post: IPostType
}

export function Post({post}: IPostProps){
    const [comments, setComments] = useState([
        'Post muito bacana!!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(post.publishedAt, 
        "d 'de' LLLL 'às' HH:mm'h'",
        //{locale: ptBR},
    );
    
      const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        //locale: ptBR,
        addSuffix: true
      });

  function handleCreateNewComment() {
    event?.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }


    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('esse campo é obrigatório')
    
  }
  function deleteComment(commentToDelete: string) {
      const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete;
      })

      setComments(commentsWithoutDeletedOne);
    }
  const isNewCommentEmpty=newCommentText.length===0
  

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar imageURL={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.constent}>{line.constent}</p>;
          } else if (line.type === 'link') {
            return <p key={line.constent}><a href="#">{line.constent}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}