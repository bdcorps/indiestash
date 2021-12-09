
import Link from 'next/link'
import { NextSeo } from 'next-seo';
import { booklists } from '../data'

const topics = Object.keys(booklists)

export default function Home() {
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

  const title = "Curated list of useful books for indie founders - SaaSBase"
  return (
    <div className="text-center">
      <NextSeo
        title={title}
        description={title}
        openGraph={{
          url: "https://saasbase.dev/products/indiestash",
          title,
          description: title,
          images: [
            {
              url: 'https://saasbase.dev/content/images/2021/07/saasbase-open-graph-1.png',
              width: 800,
              height: 600,
              alt: 'Title Image',
              type: 'image/jpeg',
            }
          ],
          site_name: 'SaaSBase',
        }}
        twitter={{
          site: '@sssaini_',
          cardType: 'summary_large_image',
        }}
      />
      <h1 className="text-5xl font-bold text-center text-gray-700">Curated list of useful books for indie founders</h1>
      <div className="flex flex-wrap my-6 justify-center">

        {topics.map(topic => {
          const formattedTitle = topic.split('-').map(i => capitalizeFirstLetter(i)).join(' ')

          return <Link href={`/top-10-books-to-read-on-${topic}-for-your-startup-in-2022`}><a className="bg-indigo-700 py-1 px-6 text-white rounded-3xl m-2">{formattedTitle}</a></Link>
        })}
      </div>

    </div>
  )
}