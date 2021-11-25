import Meta from './Meta'
import Header from './Header'

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>

      <div className=" container max-w-xl mx-auto">
        {/* <Meta /> */}
        {/* <Nav /> */}
        <Header />
        {children}
        <div className="text-center">
          <button className="text-indigo-700 my-2 underline" href="https://saasbase.dev/generate-10x-seo-trafffic-from-google-using-next-js-full-tutorial/">This app runs pretty fast eh? Check out how it was made</button>
        </div>
      </div>

      {/* <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div> */}
    </>
  )
}

export default Layout