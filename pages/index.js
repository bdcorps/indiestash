import ArticleList from '../components/ArticleList'
import { server } from '../config'
import Link from 'next/link'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-center text-gray-700">Curated list of useful books for indie founders</h1>
      <div className="flex flex-wrap my-6">

        <Link href="/booklist/top-book-to-read-on-business-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Business</a></Link>

        <Link href="/booklist/top-book-to-read-on-copywriting-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Copywriting</a></Link>

        <Link href="/booklist/top-book-to-read-on-psychology-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Psychology</a></Link>

        <Link href="/booklist/top-book-to-read-on-marketing-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Marketing</a></Link>

        <Link href="/booklist/top-book-to-read-on-bitcoin-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Bitcoin</a></Link>

        <Link href="/booklist/top-book-to-read-on-leadership-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Leadership</a></Link>

        <Link href="/booklist/top-book-to-read-on-startups-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Startups</a></Link>
      </div>
      {/* <div className="mt-4 grid grid-cols-3 content-around">
        <span><a className="tag inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800 hover:text-indigo-600" href="/tag/aws/">Marketing</a></span>

        <span><a className="tag inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800 hover:text-indigo-600" href="/tag/aws/">Psychology</a></span>

        <span><a className="tag inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800 hover:text-indigo-600" href="/tag/aws/">Copywriting</a></span>
      </div> */}

    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()
//   console.log('hj', articles)
//   return { props: { articles } }
// }