import ArticleItem from './ArticleItem'
import styles from '../styles/Article.module.css'

const ArticleList = ({ booklists }) => {
  return (
    <div className={styles.grid}>
      {booklists.map(booklist => (<ArticleItem booklist={booklist}></ArticleItem>))}
    </div>
  )
}

export default ArticleList