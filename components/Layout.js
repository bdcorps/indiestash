import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {/* <Nav /> */}
      {/* <Header /> */}

      <Container>
        {children}
      </Container>

      {/* <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div> */}
    </>
  )
}

export default Layout