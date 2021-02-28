import ArticleList from '../components/ArticleList'
import { server } from '../config'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <h1>Index page</h1>
      {/* <ArticleList articles={articles} /> */}
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()
//   console.log('hj', articles)
//   return { props: { articles } }
// }