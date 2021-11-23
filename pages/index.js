
import Link from 'next/link'
import { booklists } from '../data'

const topics = Object.keys(booklists)

export default function Home() {
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-center text-gray-700">Curated list of useful books for indie founders</h1>
      <div className="flex flex-wrap my-6">

        {topics.map(topic => {
          const formattedTitle = topic.split('-').map(i => capitalizeFirstLetter(i)).join(' ')

          return <Link href={`/top-10-books-to-read-on-${topic}-for-your-startup-in-2022`}><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl m-2">{formattedTitle}</a></Link>
        })}
      </div>
      <a className="text-indigo-700 fixed bottom-0 left-1/2 -ml-6 pb-4" href="https://saasbase.dev">Created by SaaSBase</a>
    </div>
  )
}