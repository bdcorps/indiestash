import Meta from './Meta'
import Header from './Header'

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {/* <Nav /> */}
      <Header />

      <div className="max-w-xl mx-auto">
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