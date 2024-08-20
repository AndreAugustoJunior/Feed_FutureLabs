import { Header } from './components/Header';
import { Post, IPostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: IPostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Criador SoftwareLibre'
    },
    content: [
      { type: 'paragraph', constent: 'Fala galera 👋' },
      { type: 'paragraph', constent: 'Acabei de subir mais um projeto no meu portifa. É um projeto muito importante para mim. O nome do projeto é ProjetoAe' },
      { type: 'link', constent: 'jane.design/projetoai' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', constent: 'Acabei de ver noticias sobre novas atualizacoes em varias libs cuidado ae pessoal' },
      { type: 'link', constent: 'atualizacoestech.com' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}