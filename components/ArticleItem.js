import Link from 'next/link'
import styles from '../styles/Article.module.css'

const ArticleItem = ({ booklist }) => {
  return (
    <Link href="/booklist/[id]" as={`/booklist/${booklist.id}`}>
      <a className={styles.card} href="">
        <h3>
          {booklist.title} &rarr;
        </h3>
        <p>{booklist.title} </p>
      </a>
    </Link >
  )
}

export default ArticleItem