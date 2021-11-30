import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name="keywords"
        content={keywords}
      />
      <meta rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="msapplication-TileColor" content="#5000ff" />
      <meta name="theme-color" content="#5000ff" />

      {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="SaaSBase" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
      <meta property="og:type" content="article" />
      {/* <meta property="og:url" content={window.location.href} /> */}
      {/* <meta property="og:image" content="https://flaviocopes.com/img/avatar.png" /> */}

      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Curated list of useful books for indie founders - SaaSBase",
  keywords: "books, startups, business, copywriting, psychology, bitcoin, leadership, startups",
  description: "Curated list of useful books for indie founders"
}

export default Meta
