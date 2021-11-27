import Layout from '../components/Layout'
import PlausibleProvider from 'next-plausible'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <PlausibleProvider domain="saasbase.dev">
        <Component {...pageProps} />
      </PlausibleProvider>
    </Layout>)
}

export default MyApp
