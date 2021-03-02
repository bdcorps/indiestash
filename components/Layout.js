import Meta from './Meta'
import Header from './Header'

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>

      <div className=" container max-w-xl mx-auto">
        <Meta />
        {/* <Nav /> */}
        <Header />
        {children}
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