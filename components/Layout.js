import Meta from './Meta'
import Header from './Header'
import SignupForm from './SignupForm'

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>

      <div className=" container max-w-xl mx-auto">
        {/* <Meta /> */}
        {/* <Nav /> */}
        <Header />
        {children}
        <div className="text-center mb-4">
          <a className="text-indigo-700 my-2 underline" href="https://saasbase.dev/generate-10x-seo-trafffic-from-google-using-next-js-full-tutorial/" onClick={() => plausible('clicked-tutorial-link')}>This app runs pretty fast eh? Check out how it was made →</a>
        </div>

        {/* <div className="text-center mb-4">
          <a className="text-indigo-700 my-2 underline" href="https://saasbase.dev/#/portal/signup" onClick={() => plausible('clicked-tutorial-link')}>🚀 I'm building a product a month in public. Subscribe to follow along →</a>
        </div> */}

        <SignupForm />



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