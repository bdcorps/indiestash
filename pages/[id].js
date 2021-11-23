import { booklists } from '../data'
import { getBooklists } from './api/booklists/[id]'
// import Meta from '../components/Meta'
import { NextSeo } from 'next-seo';
import { ArticleJsonLd } from 'next-seo';
import * as moment from 'moment';


const article = ({ booklists, title, updatedAt }) => {
  let url = ""
  if (typeof window !== 'undefined') {
    url = window.location.href;
  }

  const allImages = booklists.map(i => i.volumeInfo.imageLinks?.thumbnail).filter(i => !!i);

  return (<>
    {/* <Meta title={title} /> */}

    <NextSeo
      title={title}
      description={title}
      openGraph={{
        url,
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

    <ArticleJsonLd
      url={url}
      title={title}
      images={allImages}
      datePublished={moment().format()}
      dateModified={moment().format()}
      authorName={['SaaSBase']}
      publisherName="SaaSBase"
      publisherLogo="https://lh3.googleusercontent.com/XtsdnN74E96NAe4U1ffj1pE7dUNtc0e85ae0mMaBt3CRmdV3INXyHco6m4j9MxO2ylvACOuvwXI"
      description={title}
    />


    <header className="pt-6 xl:pb-10">
      <dd className="text-base leading-6 font-medium text-gray-500"><time dateTime="2021-02-16T16:05:00.000Z">Tuesday, Febuary 16, 2021</time></dd>
      <h1 className="mt-2 text-3xl leading-9 font-bold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        {title}
      </h1>
    </header>
    <hr />
    {booklists.map(booklist => {
      const thumbnail = booklist.volumeInfo.imageLinks?.thumbnail
      const title = booklist.volumeInfo.title

      const desc = booklist.volumeInfo.description?.replace(/<[^>]*>?/gm, '').split(" ") || [""];
      const descriptionLength = Math.min(50, desc.length)
      const description = desc.slice(0, descriptionLength).join(' ') + "..."
      const authors = booklist.volumeInfo.authors.join(', ')
      return (
        <div key={booklist.id}>
          <article >
            <div className="">
              <div className="max-w-none">

                <div className="space-y-12">

                  <div className="post">
                    <div className="my-4">
                      <div className="space-y-2">
                        <div className="bg-gray-100 h-96 flex items-center justify-center">
                          <img
                            className="rounded-lg h-60"
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
                        href={booklist.volumeInfo.infoLink}
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
  const booklists = getBooklists(topic)
  const updatedAt = Date.UTC()
  return { props: { booklists, title, updatedAt } }
}

const topics = Object.keys(booklists)


function buildSearchPath(topic) {
  let path = `top 10 books to read on ${topic} for your startup in 2022`
  path = path.replace(/ /g, "-")

  return path;
}

function generateAllPaths() {
  let paths = Object.keys(booklists)
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
