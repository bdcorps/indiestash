import ArticleList from '../components/ArticleList'
import { server } from '../config'
import Link from 'next/link'
import { articles } from '../data'

const topics = Object.keys(articles)

export default function Home() {
  console.log(topics)
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-center text-gray-700">Curated list of useful books for indie founders</h1>
      <div className="flex flex-wrap my-6">

        {topics.map(topic => (
          <Link href={`/booklist/top-4-books-to-read-on-${topic}-for-your-startup-in-2021`}><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">{topic}</a></Link>
        ))}

        {/* <Link href="/booklist/top-book-to-read-on-business-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Business</a></Link>

        <Link href="/booklist/top-book-to-read-on-copywriting-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Copywriting</a></Link>

        <Link href="/booklist/top-book-to-read-on-psychology-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Psychology</a></Link>

        <Link href="/booklist/top-book-to-read-on-bitcoin-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Bitcoin</a></Link>

        <Link href="/booklist/top-book-to-read-on-leadership-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Leadership</a></Link>

        <Link href="/booklist/top-book-to-read-on-startups-in-2021"><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">Startups</a></Link> */}
      </div>
      {/* <div className="mt-4 grid grid-cols-3 content-around">
        <span><a className="tag inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800 hover:text-indigo-600" href="/tag/aws/">Marketing</a></span>

        <span><a className="tag inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800 hover:text-indigo-600" href="/tag/aws/">Psychology</a></span>

        <span><a className="tag inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800 hover:text-indigo-600" href="/tag/aws/">Copywriting</a></span>
      </div> */}

    </div>
  )
}