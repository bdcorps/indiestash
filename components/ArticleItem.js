import Link from 'next/Link'
import styles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={styles.card} href="">
        <h3>
          {article.title} &rarr;
        </h3>
        <p>{article.title} </p>
      </a>
    </Link >
  )
}

export default ArticleItem