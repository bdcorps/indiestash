import Link from 'next/link'
import { useRouter } from 'next/router'
import { articles } from '../../../data'
import { getSongs } from '../../api/articles/[id]'
import { Table, Col, Row, Jumbotron, Button } from 'react-bootstrap'
import Image from 'next/image'
import Meta from '../../../components/Meta'

const article = ({ articles, title, updatedAt }) => {
  return (<>
    <Meta title={title} />
    <header className="pt-6 xl:pb-10">
      <dd className="text-base leading-6 font-medium text-gray-500"><time dateTime="2021-02-16T16:05:00.000Z">Tuesday, Febuary 16, 2021</time></dd>
      <h1 className="mt-2 text-3xl leading-9 font-bold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        {title}
      </h1>
    </header>
    <hr />
    {articles.map(article => {
      const thumbnail = article.volumeInfo.imageLinks.thumbnail
      const title = article.volumeInfo.title
      const description = article.volumeInfo.description.replace(/<[^>]*>?/gm, '')
      const authors = article.volumeInfo.authors[0]
      return (
        <div key={article.id}>
          <article >
            <div className="">
              <div className="max-w-none">

                <div className="space-y-12">

                  <div className="post">
                    <div className="my-4">
                      <div className="space-y-2">
                        <div className="bg-gray-100 h-96 flex items-center justify-center">
                          <img
                            className="rounded-lg"
                            src={thumbnail}
                            alt={`Book cover thumbnail for ${title} by ${authors}`}
                          />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">
                          {title} by {authors}
                        </h1>
                        <p className="text-gray-500">
                          {description}
                        </p></div>
                      <p><a
                        className="transition-colors duration-200 hover:text-gray-800"
                        href={article.volumeInfo.infoLink}
                      >View on Google Books <span aria-hidden="true" className="mr-2">→</span></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <br></br>
        </div>
      )
    })}  </>
  )
}

function tokenize(str) {
  for (const topic of topics) {
    if (str.includes(topic)) {
      return topic
    }
  }
}

export const getStaticProps = async (context) => {
  let title = context.params.id.replace(/-/g, " ").split(" ")
  title = title.map(w => w.charAt(0).toUpperCase() + w.substring(1)).join(' ')
  const topic = tokenize(context.params.id)
  const articles = getSongs(topic)
  const updatedAt = Date.UTC()
  return { props: { articles, title, updatedAt } }
}

const topics = Object.keys(articles)


function buildSearchPath(topic) {
  let path = `top 4 books to read on ${topic} for your startup in 2021`
  path = path.replace(/ /g, "-")

  return path;
}

function generateAllPaths() {
  let paths = Object.keys(articles)
  paths = paths.map((topic => buildSearchPath(topic)))

  return paths
}

export const getStaticPaths = async () => {
  const ids = generateAllPaths()
  console.debug(`generating paths ${ids}`);
  const paths = ids.map(id => ({ params: { id: id.toString() } }))
  return {
    paths, fallback: false
  }
}

export default article
