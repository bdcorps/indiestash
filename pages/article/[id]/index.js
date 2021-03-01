import Link from 'next/link'
import { useRouter } from 'next/router'
import { articles } from '../../../data'
import { getSongs } from '../../api/articles/[id]'
import { Table, Col, Row, Jumbotron, Button } from 'react-bootstrap'
import Image from 'next/image'

const article = ({ articles, title }) => {
  // const router = useRouter()
  // const { id } = router.query
  // console.log('g', articles[0].items[0].volumeInfo.title, title)
  return (
    <article>
      <div className="">
        <header className="pt-6 xl:pb-10">
          <dd class="text-base leading-6 font-medium text-gray-500"><time datetime="2021-02-16T16:05:00.000Z">Tuesday, Febuary 16, 2021</time></dd>
          <h1 className="mt-2 text-3xl leading-9 font-bold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Top 5 Psychology Books you should read in 2021
        </h1>
        </header>

        <hr></hr>
        <div className="max-w-none">
          <div className="">
            <p className="text-gray-500 text-left">
              Life would be so much easier if our bundles of joy came bundled with a
              guide to proper care and maintenance. Fortunately for today’s moms and
              dads, these top books on parenting are the next best thing. So sit back,
              moms and dads, because your reading list just got a little longer!
    </p>
          </div>

          <div className="space-y-12">

            <div className="post">
              <div className="space-y-2">
                <div className="bg-gray-100 h-96 flex items-center justify-center">
                  <img
                    className="rounded-lg"
                    src="http://books.google.com/books/content?id=Lw3fDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    alt=""
                  />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">
                  The Lean Startup
        </h1>
                <p className="text-lg text-gray-500">
                  The Lean Startup provides a scientific approach to creating and
                  managing startups and get a desired product to customers' hands
                  faster.
        </p>
                <a
                  className="transition-colors duration-200 hover:text-gray-800 text-lg"
                  href="/docs/object-fit"
                >View on Amazon<span aria-hidden="true" className="mr-2">→</span></a
                >
              </div>
            </div>

            {/* <hr /> */}
            <div className="post">
              <div className="pb-6 space-y-2">
                <div className="bg-gray-100 h-96 flex items-center justify-center">
                  <img
                    className="rounded-lg"
                    src="http://books.google.com/books/content?id=Lw3fDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    alt=""
                  />
                </div>
                <h1 className="text-2xl font-bold mt-6 text-gray-800">
                  The Lean Startup
        </h1>
                <p className="text-lg text-gray-500">
                  The Lean Startup provides a scientific approach to creating and
                  managing startups and get a desired product to customers' hands
                  faster.
        </p>
                <a
                  className="transition-colors duration-200 hover:text-gray-800 text-lg"
                  href="/docs/object-fit"
                >View on Amazon<span aria-hidden="true" className="mr-2">→</span></a
                >
              </div>
            </div>
          </div>
        </div>
        {/* <!-- <div className="my-4 rounded-xl shadow-md overflow-hidden"> --> */}
      </div>




    </article>
  )
}

// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//   const article = await res.json()

//   return { props: { article } }
// }

function tokenize(str) {
  const tokens = str.split("-")

  let topic = ""
  tokens.forEach((token) => {
    if (topics.includes(token)) {
      topic = token
    }
  })
  return topic
}

export const getStaticProps = async (context) => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  let title = context.params.id.replace(/-/g, " ").split(" ")
  console.log("title", title)
  title = title.map(w => w.charAt(0).toUpperCase() + w.substring(1)).join(' ')
  console.log("returning", context.params.id)
  const topic = tokenize(context.params.id)
  console.log("returning", topic)
  const articles = getSongs(topic)
  console.log("props", context.params.id, topic, articles)
  return { props: { articles, title } }
}

const topics = ["psychology",
  "copywriting",
  "startups",
  "bitcoin",
  "marketing",
  "business",
  "leadership"]


function buildSearchPath(topic) {
  let path = `top book to read on ${topic} in 2021`
  path = path.replace(/ /g, "-")

  return path;
}

function generateAllPaths() {
  let paths = Object.keys(articles)
  paths = paths.map((topic => buildSearchPath(topic)))

  return paths
}

export const getStaticPaths = async () => {
  // generates allowable IDs
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  // const articles = await res.json()

  const ids = generateAllPaths()
  // const ids = articles.map((article => article.id))
  const paths = ids.map(id => ({ params: { id: id.toString() } }))
  console.log("paths are", paths);
  return {
    paths, fallback: false
  }
}

export default article
