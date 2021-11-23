
import Link from 'next/link'
import { booklists } from '../data'

const topics = Object.keys(booklists)

export default function Home() {
  console.log(topics)
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-center text-gray-700">Curated list of useful books for indie founders</h1>
      <div className="flex flex-wrap my-6">

        {topics.map(topic => (
          <Link href={`/top-4-books-to-read-on-${topic}-for-your-startup-in-2021`}><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl  m-3">{topic}</a></Link>
        ))}
      </div>
    </div>
  )
}